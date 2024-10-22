import User from "../DataBase/auth.schema.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
export default class AuthController {
  async signup(req, res, next) {
    try {
      const { name, email, password, person } = req.body;
      if (
        !name ||
        !email ||
        !password ||
        !person ||
        name === "" ||
        email === "" ||
        password === "" ||
        person === ""
      ) {
        return next(errorHandler(400, "All fields are required!"));
      }
      const hashedPassword = await bcryptjs.hashSync(password, 10);
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        person,
      });
      await newUser.save();
      return res.json({ message: "Signup successful!" });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async signin(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password || email === "" || password === "") {
        return res.status(400).json({ message: "All fields are required!" });
      }
      const validUser = await User.findOne({ email });
      if (!validUser) {
        return res.status(400).json({ message: "User not found!" });
      }

      const validPassword = await bcryptjs.compare(
        password,
        validUser.password
      );
      if (!validPassword) {
        return res.status(400).json({ message: "Invalid password" });
      }

      const token = jwt.sign(
        { id: validUser._id, isAdmin: validUser.isAdmin },
        process.env.JWT_SECRET,
        {
          expiresIn: "1y",
        }
      );
      const { password: pass, ...rest } = validUser._doc;

      return res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json({ user: rest });
    } catch (error) {
      return res.status(500).json({ message: "Something Wrong!" });
    }
  }

  async google(req, res, next) {
    try {
      const { name, email, googlePhotoUrl } = req.body;
      const user = await User.findOne({ email });
      if (user) {
        const token = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          process.env.JWT_SECRET,
          {
            expiresIn: "1y",
          }
        );
        const { password: pass, ...rest } = user._doc;

        return res
          .status(200)
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .json(rest);
      } else {
        const generatePassword =
          Math.random().toString(36).slice(-8) +
          Math.random().toString(36).slice(-8);
        const hashedPassword = await bcryptjs.hashSync(generatePassword, 10);
        const newUser = new User({
          username:
            name.toLowerCase().split(" ").join("") +
            Math.random().toString(9).slice(-4),
          email,
          password: hashedPassword,
          profilePicture: googlePhotoUrl,
        });
        await newUser.save();
        const token = jwt.sign(
          { id: newUser._id, isAdmin: newUser.isAdmin },
          process.env.JWT_SECRET,
          {
            expiresIn: "1y",
          }
        );
        const { password: pass, ...rest } = newUser._doc;

        return res
          .status(200)
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .json({ user: rest });
      }
    } catch (error) {
      return res.status(500).json({ message: "Something Wrong!" });
    }
  }
}

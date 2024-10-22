import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    person: {
      type: String,
      default: "user",
    },
    property: {
      type: [String],
    },
  },
  { timestamps: true }
);

const Auth = mongoose.model("Auth", authSchema);

export default Auth;

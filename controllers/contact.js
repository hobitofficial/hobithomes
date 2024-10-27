import nodemailer from "nodemailer";

export default async function Contact(req, res) {
  const { name, email, phone, subject, message } = req.body;

  // Create a transporter object using Gmail service
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Mail options
  const mailOptions = {
    from: email,
    to: "ramashish62127@gmail.com", // Your receiving email address
    subject: subject,
    text: message,
    html: `<div><p>Message from Hobit Homes</p><p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>User Problem: ${subject}</p><p>Message: ${message}</p></div>`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Your message has been sent!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      message: "Failed to send your message. Please try again later.",
    });
  }
}

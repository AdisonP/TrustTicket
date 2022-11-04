const nodemailer = require("nodemailer");
const config = require("./auth.config");

const user = "adison.pereira.tt@gmail.com";
const password = config.password;

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "adison.pereira.tt@gmail.com",
    pass: "Adison13!",
  },
});

module.exports.sendConfirmationEmail = (name, email, confirmationCode) => {
  console.log("Check");
  transport
    .sendMail({
      from: user,
      to: email,
      subject: "Email confirmation - TrustTickets",
      html: `<h1> Welcome to TrusTickets !</h1>
      <h2>Hello ${name}</h2>
      <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
      <a href="http://localhost:3000/confirm/${confirmationCode}>Confirm email</a>"
      `,
    })
    .catch((err) => console.log(err));
};

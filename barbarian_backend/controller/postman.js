const user = require("../Models/contactSchema");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const postMan = (req, res) => {
  const existingSchema = new user({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    services: req.body.services,
    starting_date: req.body.starting_date,
    ending_date: req.body.ending_date,
    description: req.body.description,
  });

  let transport = nodemailer.createTransport({
    service:"gmail",
    auth:{
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  let mailOptions = {
    from: "Hamza",
    to: existingSchema.email,
    subject: "Nodemailer API",
    html: `<a href="/">verify</a>`,
  };

  transport.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("err occurs", err);
    } else {
      console.log("email successfully sent");
    }
  });

  existingSchema
    .save()
    .then(userData => console.log(userData))
    .catch(err => console.log(err));
};

module.exports = postMan;

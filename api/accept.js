// mongo stuff
const connectToDatabaseModule = require("../db");
const Invite = require("../models/Invite");

// SENDGRID STUFF
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_GRABBIN_COFFEE_KEY);

module.exports = async (req, res) => {
  try {
    console.log("-------------------");
    console.log(req.body);
    console.log("-------------------");
    console.log("-------------------");
    console.log("-------------------");

    res.send();
  } catch (error) {
    console.log(error);
    res.status(404).send();
  }
};

// SENDGRID STUFF
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_GRABBIN_COFFEE_KEY);

// Sends weekly engagement update to info@millerec.com
async function sendInvite(invite_information) {
  const msg = {
    to: invite_information.email,
    from: "gegarnhart@email.wm.edu",
    subject: "Grabbin Coffee Intie",
    text: `Hi there! You've been invited to grab coffee!\n`,
    html: `<p>Hi there!</p> <p>You've been invted to grab coffee!</p>`
  };
  await sgMail.send(msg);
}

module.exports = async (req, res) => {
  var invite_information = {
    email: req.body.email
  };
  try {
    // send update
    await sendInvite(invite_information);
    res.send();
  } catch (error) {
    console.log(error);
    res.status(404).send();
  }
};

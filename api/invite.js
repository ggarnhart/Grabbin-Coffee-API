// SENDGRID STUFF
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_GRABBIN_COFFEE_KEY);

// a terrible function
// it is very easy to understand, but is not coded very intelligently
// but it works, it's easy, and it's fun!
async function sendInvite(invite_information) {
  var countFound = parseInt(invite_information.count);

  var msg = {};
  if (countFound === 1) {
    var link_one = `mailto:${invite_information.sender_email}?subject=Responding%20to%20Your%20Invitation!&body=Hi%20there%2C%20%24%7B${invite_information.sender_name}%7D%2C%0D%0A%0D%0AI%20am%20pleased%20to%20accept%20your%20invitation%20to%20meet%20on%20%24%7B${invite_information.date_1}%7D%20at%20%24%7B${invite_information.time_1}%7D`;
    msg = {
      to: invite_information.email,
      from: "gegarnhart@email.wm.edu",
      templateId: "d-dbc70b3ab7884225845acadd162283ee",
      dynamic_template_data: {
        subject: invite_information.subject,
        sender_name: invite_information.sender_name,
        event_name: invite_information.event_name,
        name: invite_information.name,
        date_1: invite_information.date_1,
        time_1: invite_information.time_1,
        event_link_1: invite_information.event_link_1
      }
    };
  } else if (countFound === 2) {
    msg = {
      to: invite_information.email,
      from: "gegarnhart@email.wm.edu",
      templateId: "d-d2515b87d4dc4b698b683e1a531dbb5e",
      dynamic_template_data: {
        subject: invite_information.subject,
        sender_name: invite_information.sender_name,
        event_name: invite_information.event_name,
        name: invite_information.name,
        date_1: invite_information.date_1,
        time_1: invite_information.time_1,
        event_link_1: invite_information.event_link_1,
        date_2: invite_information.date_2,
        time_2: invite_information.time_2,
        event_link_2: invite_information.event_link_2,
        decline_link: invite_information.decline_link
      }
    };
  } else if (countFound === 3) {
    msg = {
      to: invite_information.email,
      from: "gegarnhart@email.wm.edu",
      templateId: "d-112572847dd04861b67ca80815f26c2e",
      dynamic_template_data: {
        subject: invite_information.subject,
        sender_name: invite_information.sender_name,
        event_name: invite_information.event_name,
        name: invite_information.name,
        date_1: invite_information.date_1,
        time_1: invite_information.time_1,
        event_link_1: invite_information.event_link_1,
        date_2: invite_information.date_2,
        time_2: invite_information.time_2,
        event_link_2: invite_information.event_link_2,
        date_3: invite_information.date_3,
        time_3: invite_information.date_3,
        event_link_3: invite_information.event_link_3,
        decline_link: invite_information.decline_link
      }
    };
  } else if (countFound === 4) {
    msg = {
      to: invite_information.email,
      from: "gegarnhart@email.wm.edu",
      templateId: "d-f5ee018723c54dc4a1ac72545e62db64",
      dynamic_template_data: {
        subject: invite_information.subject,
        sender_name: invite_information.sender_name,
        event_name: invite_information.event_name,
        name: invite_information.name,
        date_1: invite_information.date_1,
        time_1: invite_information.time_1,
        event_link_1: invite_information.event_link_1,
        date_2: invite_information.date_2,
        time_2: invite_information.time_2,
        event_link_2: invite_information.event_link_2,
        date_3: invite_information.date_3,
        time_3: invite_information.date_3,
        event_link_3: invite_information.event_link_3,
        date_4: invite_information.date_4,
        time_4: invite_information.time_4,
        event_link_4: invite_information.event_link_4,
        decline_link: invite_information.decline_link
      }
    };
  } else if (countFound === 5) {
    msg = {
      to: invite_information.email,
      from: "gegarnhart@email.wm.edu",
      templateId: "d-6e106688abff4b6588ad4d60557aa34a",
      dynamic_template_data: {
        subject: invite_information.subject,
        sender_name: invite_information.sender_name,
        event_name: invite_information.event_name,
        name: invite_information.name,
        date_1: invite_information.date_1,
        time_1: invite_information.time_1,
        event_link_1: invite_information.event_link_1,
        date_2: invite_information.date_2,
        time_2: invite_information.time_2,
        event_link_2: invite_information.event_link_2,
        date_3: invite_information.date_3,
        time_3: invite_information.time_3,
        event_link_3: invite_information.event_link_3,
        date_4: invite_information.date_4,
        time_4: invite_information.time_4,
        event_link_4: invite_information.event_link_4,
        date_5: invite_information.date_5,
        time_5: invite_information.time_5,
        event_link_5: invite_information.event_link_5,
        decline_link: invite_information.decline_link,
        location: invite_information.location
      }
    };
  }
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.log("Error in sending mail!");
    console.log(error);
  }
}

module.exports = async (req, res) => {
  console.log(req.body);
  try {
    await sendInvite(req.body);
    res.send();
  } catch (error) {
    console.log(error);
    res.status(404).send();
  }
};

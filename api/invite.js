// SENDGRID STUFF
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_GRABBIN_COFFEE_KEY);

// a terrible function
// it is very easy to understand, but is not coded very intelligently
// but it works, it's easy, and it's fun!
async function sendInvite(invite_information) {
  var msg = {};
  if (invite_information.count === 1) {
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
        event_link_1: invite_information.event_link_1,
        decline_link: "https://sadpuppy.games/"
      }
    };
  } else if (invite_information.count === 2) {
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
        decline_link: "https://sadpuppy.games/"
      }
    };
  } else if (invite_information.count === 3) {
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
        event_link_3: invite_information.event_link_3,
        date_3: invite_information.date_3,
        time_3: invite_information.date_3,
        decline_link: "https://sadpuppy.games/"
      }
    };
  } else if (invite_information.count === 4) {
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
        decline_link: "https://sadpuppy.games/"
      }
    };
  } else if (invite_information.count === 5) {
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
        time_3: invite_information.date_3,
        event_link_3: invite_information.event_link_3,
        date_4: invite_information.date_4,
        time_4: invite_information.time_4,
        event_link_4: invite_information.event_link_4,
        date_5: invite_information.date_5,
        time_5: invite_information.time_5,
        event_link_5: invite_information.event_link_5,
        decline_link: "https://sadpuppy.games/"
      }
    };
  }

  await sgMail.send(msg);
}

module.exports = async (req, res) => {
  var invite_information = {
    email: req.body.email,
    count: 3,

    subject: "Greg is inviting you to get Coffee",
    sender_name: "Greg",
    event_name: "Example Event",
    name: "Reid",
    date_1: "February 20, 2020",
    time_1: "12:00PM EST",
    event_link_1: "https://reddit.com",
    date_2: "February 20, 2020",
    time_2: "12:00PM EST",
    event_link_2: "https://reddit.com",
    date_3: "February 20, 2020",
    time_3: "12:00PM EST",
    event_link_3: "https://reddit.com",
    date_4: "February 20, 2020",
    time_4: "12:00PM EST",
    event_link_4: "https://reddit.com",
    date_5: "February 20, 2020",
    time_5: "12:00PM EST",
    event_link_5: "https://reddit.com",
    decline_link: "https://sadpuppy.games/"
  };
  try {
    await sendInvite(invite_information);
    res.send();
  } catch (error) {
    console.log(error);
    res.status(404).send();
  }
};

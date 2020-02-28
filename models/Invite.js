const mongoose = require("mongoose");
const InviteSchema = new mongoose.Schema({
  date_1_stramp: { type: Date, default: Date.now() },
  date_1_string: { type: String },
  time_1_string: { type: String },

  date_2_stamp: { type: Date, default: Date.now() },
  date_2_string: { type: String },
  time_2_string: { type: String },

  sender_email: { type: String },
  invitee_email: { type: String },
  active: { type: Boolean, default: false },
  accepted: { type: Boolean }

  // obviously optional fields.
});
module.exports = mongoose.model("Invite", InviteSchema);

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

// create a schema
let MemberSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
  dataCreated: { type: String },
  paymentRegular: { type: Boolean },
  cash: { type: Number },
  taxNumber: { type: Number, required: true },
  photo: { type: String, required: true, unique: true },
});

// the schema is useless so far
// we need to create a model using it
let Member = mongoose.model("Member", MemberSchema);

// make this available to our users in our Node applications
module.exports = Member;
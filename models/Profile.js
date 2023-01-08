import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  username: String,
  views: {
    type: Number,
    default: 0,
  },#check
  links: {
    default: [],
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Link" }],
  },
});

module.exports =
  mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);

const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    dweet: {
      type: String,
      required: true,
    },
    posted_by: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Posts", PostSchema);

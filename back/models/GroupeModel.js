const mongoose = require("mongoose");

const GroupeSchema = new mongoose.Schema({
  groupeAdmin: {
    
    type:mongoose.Types.ObjectId,
    ref:"User",
    required: true,
  },
  users:[String],
  Name: String,
  avatar: String,
  theme: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});
module.exports=mongoose.model("Groupe", GroupeSchema);
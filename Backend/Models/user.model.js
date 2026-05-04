import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  // name: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const UserModel = mongoose.model("user", UserSchema);

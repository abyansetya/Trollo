import mongoose, { Schema } from "mongoose";

// 👉 Tambahkan interface TypeScript untuk user
export interface UserDocument extends Document {
  _id: string; // override ObjectId → string for TS
  email: string;
  password: string;
  name: string;
  profilePicture?: string;
  isEmailVerified: boolean;
  lastLogin?: Date;
  is2FAEnabled: boolean;
  twoFAOtp?: string;
  twoFAOtpExpired?: Date;
}

const userSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    profilePicture: { type: String },
    isEmailVerified: { type: Boolean, default: false },
    lastLogin: { type: Date },
    is2FAEnabled: { type: Boolean, default: false },
    twoFAOtp: { type: String, select: false },
    twoFAOtpExpired: { type: Date, select: false },
  },
  { timestamps: true }
);

const User = mongoose.model<UserDocument>("User", userSchema);

export default User;

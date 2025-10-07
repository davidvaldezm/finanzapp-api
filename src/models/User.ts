import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  passwordHash: { type: String, required: true },
  locale: { type: String, default: 'mx' },
  twoFAEnabled: { type: Boolean, default: false },
}, { timestamps: true });

export const User = model('User', userSchema);

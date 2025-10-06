import { Schema, model, Types } from 'mongoose';

const goalSchema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  targetAmount: { type: Number, required: true },
  targetDate: { type: Date, required: true },
  savedAmount: { type: Number, default: 0 },
}, { timestamps: true });

export const Goal = model('Goal', goalSchema);

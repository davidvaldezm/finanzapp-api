import { Schema, model, Types } from 'mongoose';

const budgetSchema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User', required: true },
  month: { type: String, required: true }, // YYYY-MM
  categoryId: { type: Types.ObjectId, ref: 'Category', required: true },
  limit: { type: Number, required: true },
}, { timestamps: true });

export const Budget = model('Budget', budgetSchema);

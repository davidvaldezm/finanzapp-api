import { Schema, model, Types } from 'mongoose';

const transactionSchema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User', required: true },
  kind: { type: String, enum: ['income','expense','transfer'], required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  note: String,
  categoryId: { type: Types.ObjectId, ref: 'Category' },
  fromAccount: String,
  toAccount: String,
  attachments: [String],
}, { timestamps: true });

export const Transaction = model('Transaction', transactionSchema);

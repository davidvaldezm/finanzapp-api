import mongoose from 'mongoose';
import { env } from './env.js';

export async function connectDB() {
  if (!env.MONGO_URI) {
    console.warn('[DB] No MONGO_URI provided — skipping connection (dev dummy mode).');
    return;
  }
  await mongoose.connect(env.MONGO_URI);
  console.log('[DB] Connected to MongoDB');
}

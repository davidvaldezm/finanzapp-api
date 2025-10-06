import { createApp } from './app.js';
import { env } from './config/env.js';
import { connectDB } from './config/db.js';

const app = createApp();

async function start() {
  await connectDB();
  app.listen(env.PORT, () => {
    console.log(`[API] Listening on port ${env.PORT} — Swagger at /docs`);
  });
}

start().catch((err) => {
  console.error('Startup error:', err);
  process.exit(1);
});

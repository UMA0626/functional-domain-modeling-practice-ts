// ヘルスチェック
import type { Hono } from "hono";

export const registerHealthRoutes = (app: Hono) => {
  app.get("/health", (c) => {
    console.log('test')
    return c.json({ ok: true, ts: new Date().toISOString() })
  });
};

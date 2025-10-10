import type { Hono } from "hono";

export const registerHealthRoutes = (app: Hono) => {
  app.get("/health", (c) => c.json({ ok: true, ts: new Date().toISOString() }));
};

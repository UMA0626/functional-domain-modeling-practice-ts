// ヘルスチェック
import type { Hono } from "hono";

export const placeOrderRoutes = (app: Hono) => {
  app.post("/place-order", async (c) => {
    const body = await c.req.json();
    console.log(body, typeof body);

    return c.json({ ok: true, ts: new Date().toISOString() })
  });
};

import type { Hono } from "hono";

export const registerPlaceOrderRoutes = (app: Hono) => {
  app.post("/place-order", async (c) => {
    const body = await c.req.json();
    console.log('body is', body);
    return c.json(body);
  });
};
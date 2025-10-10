import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { registerHealthRoutes } from "./routes/health.js";
import { registerPlaceOrderRoutes } from "./routes/placeOrder.js";

const app = new Hono();

// ルート登録
registerHealthRoutes(app);
registerPlaceOrderRoutes(app);

// 404
app.all("*", (c) => c.json({ error: "not found" }, 404));

// 起動
const port = Number(process.env.PORT ?? 3000);

serve({
  fetch: app.fetch,
  port: port,
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { registerHealthRoutes } from "./routes/health";
import { placeOrderRoutes } from "./routes/place-order";

const app = new Hono();

app.use("*", async (c, next) => {
  console.log('middleware')
  console.log(c.req.method, c.req.url)
  await next()
})

// ルート登録
registerHealthRoutes(app);
placeOrderRoutes(app);

// 404
app.all("*", (c) => c.json({ error: "not found" }, 404));

// 起動
const port = Number(process.env.PORT) || 3000;

serve({
  fetch: app.fetch,
  port: port,
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

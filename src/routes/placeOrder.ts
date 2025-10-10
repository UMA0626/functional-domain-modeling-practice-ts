import { Hono } from "hono";

const app = new Hono();

app.post('/place-order', async (c) => {
    // リクエストボディの取得
    const body = await c.req.json();
    // 注文処理を実装
    console.log({
        message: 'Order placed successfully',
        orderDetails: body,
    });
    return c.json({ message: 'Order placed successfully', orderDetails: body
    })
})
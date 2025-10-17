// ヘルスチェック
import type { Hono } from "hono";
import { z }  from "zod";

const UnvalidatedOrderLineDto = z.object({
  orderLineId: z.string(),
  productCode: z.string(),
  quantity: z.number(),
});

const UnvalidatedCustomerInfoDto = z.object({
  firstName: z.string(),
  lastName: z.string(),
  emailAddress: z.string(),
});

const UnvalidatedOrderDto = z.object({
  orderId: z.string(),
  customerInfo: UnvalidatedCustomerInfoDto,
  shippingAddress : z.string(),
  billingAddress : z.string(),
  lines: z.array(UnvalidatedOrderLineDto),
});

export const placeOrderRoutes = (app: Hono) => {
  app.post("/place-order", async (c) => {
    const body = await c.req.json();
    console.log(body, typeof body);

    const result = UnvalidatedOrderDto.safeParse(body);
    if (!result.success) {
      return c.json({ ok: false, errors: result.error.flatten() }, 400);
    }

    return c.json({ ok: true, ts: new Date().toISOString() })
  });
};

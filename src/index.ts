import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { registerHealthRoutes } from './routes/health.js'
import { registerPlaceOrderRoutes } from './routes/placeOrder.js'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

registerHealthRoutes(app)
registerPlaceOrderRoutes(app)
serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

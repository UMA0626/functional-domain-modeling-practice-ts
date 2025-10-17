import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { registerHealthRoutes } from './routes/health.js'
import { placeOrderRoutes } from './routes/place-order.js'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

registerHealthRoutes(app)
placeOrderRoutes(app)
serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

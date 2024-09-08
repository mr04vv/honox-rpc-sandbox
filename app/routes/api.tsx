import { Hono } from 'hono'

const app = new Hono()

app.use(async (c, next) => {
  console.log("Hello, Hono!", c.req.url)
  await next()
})

const route = app.get('/', (c) => {
  return c.json({ message: 'index dayoooo' })
}).get('/hoge', (c) => {
  return c.json({ message: 'hogehogehoge' })
})

export type AppType = typeof route

export default app

import { css } from 'hono/css'
import { createRoute } from 'honox/factory'
import Counter from '../islands/counter'
import { hc } from 'hono/client'
import { AppType } from './api'
import { client } from '../lib/client'

const className = css`
  font-family: sans-serif;
`

export default createRoute(async (c) => {
  const name = c.req.query('name') ?? 'Hono'
  const res = await client.hoge.$get()
  const json = await res.json()

  return c.render(
    <div class={className}>
      <h1>Hello, {json.message}</h1>
      <Counter />
    </div>,
    { title: name }
  )
})

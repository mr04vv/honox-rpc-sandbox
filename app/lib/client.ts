import { hc } from "hono/client";
import { AppType } from "../routes/api";

export const client = hc<AppType>('http://localhost:5173/api')

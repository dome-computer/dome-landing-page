import { novaa_desktop_auth } from "@/lib/auth"
import { toNextJsHandler } from "better-auth/next-js";

// Disallow body parsing, we will parse it manually
export const config = { api: { bodyParser: false } }

export const { GET, POST } = toNextJsHandler(novaa_desktop_auth.handler);
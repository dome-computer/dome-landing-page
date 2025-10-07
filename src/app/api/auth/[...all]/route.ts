import { auth } from "@/lib/auth"
import { ALLOWED_ORIGIN } from "@/shared/constants";
import { toNextJsHandler } from "better-auth/next-js";
import { NextRequest, NextResponse } from "next/server";

// Disallow body parsing, we will parse it manually
export const config = { api: { bodyParser: false } }

export const { GET, POST } = toNextJsHandler(auth.handler);
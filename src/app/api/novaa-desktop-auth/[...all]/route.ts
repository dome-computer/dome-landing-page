import { novaa_desktop_auth } from "@/lib/auth"
import { ALLOWED_ORIGIN } from "@/shared/constants";
import { toNextJsHandler } from "better-auth/next-js";
import { NextRequest, NextResponse } from "next/server";

// Disallow body parsing, we will parse it manually
export const config = { api: { bodyParser: false } }

const headers = {
        'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Credentials': 'true',
    }


export const OPTIONS = async (request: NextRequest) => {
    return new NextResponse('', {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': "*",
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            // 'Access-Control-Allow-Credentials': 'true',
        },
    })
}

export const { GET, POST } = toNextJsHandler(novaa_desktop_auth.handler);
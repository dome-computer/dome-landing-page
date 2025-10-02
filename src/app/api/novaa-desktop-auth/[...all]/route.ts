import { novaa_desktop_auth } from "@/lib/auth"
import { ALLOWED_ORIGIN } from "@/shared/constants";
import { toNextJsHandler } from "better-auth/next-js";
import { NextRequest, NextResponse } from "next/server";

// Disallow body parsing, we will parse it manually
export const config = { api: { bodyParser: false } }

export const OPTIONS = async (request: NextRequest) => {
    console.log("requestrequest", request)
    return new NextResponse("Hello there options", {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': "https://dome.computer",
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Access-Control-Allow-Credentials': 'true',
        },
    })
}

export const GET = () => {
    const get = toNextJsHandler(novaa_desktop_auth.handler)
    return get.GET
}

export const POST = () => {
    const get = toNextJsHandler(novaa_desktop_auth.handler)
    return get.POST
}

// export const { GET, POST } = toNextJsHandler(novaa_desktop_auth.handler);
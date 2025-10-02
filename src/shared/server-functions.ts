"use server"
import { auth } from "@/lib/auth"
import { cookies, headers } from "next/headers"
import jwt from "jsonwebtoken"
import { BASE_URL } from "./constants"

export const handle_get_session = async () => {
    return await auth.api.getSession({
        headers: await headers()
    })
}

export const get_novaa_desktop_token = async () => {
    const session = await handle_get_session()
    let data = {}
    const scope = await handle_get_cookie("nva-lgn-scp")
    if (session && scope) {
        const signed_jwt = jwt.sign({data: session as any, exp: session.session.expiresAt.getTime()}, process.env.JWT_SECRET as string)
        data = {
            jwt: signed_jwt,
            scope: scope.cookie
        }
        await handle_remove_cookie("nva-lgn-scp")
    }
    return data;
}

export const handle_set_cookie = async (key: string, value: string) => {
    const cki = await cookies()
    cki.set(key, value, {
      httpOnly: false,
      secure: false,
      expires: new Date(Date.now()+(1000*60*10)),
      sameSite: 'lax',
      path: '/',
    })
}

export const handle_get_cookie = async (key: string) => {
    const cki = await cookies()
    const get_key = cki.get(key)?.value
    console.log("get_key876567", get_key)
    return {cookie: JSON.stringify(get_key)}
}

export const handle_remove_cookie = async (key: string) => {
    const cki = await cookies()
    cki.delete(key)
}

export const handle_get_bURL = async () => {
    return BASE_URL
}
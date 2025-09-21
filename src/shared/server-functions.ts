"use server"
import { auth } from "@/lib/auth"
import { cookies, headers } from "next/headers"

export const handle_get_session = async () => {
    return await auth.api.getSession({
        headers: await headers()
    })
}

export const handle_set_cookie = async (key: string, value: string) => {
    const cki = await cookies()
    cki.set(key, value)
}

export const handle_get_cookie = async (key: string) => {
    const cki = await cookies()
    return cki.get(key)
}
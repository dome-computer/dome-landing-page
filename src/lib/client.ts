import { BASE_URL } from "@/shared/constants"
import { createAuthClient } from "better-auth/react" // make sure to import from better-auth/react

export const novaaDesktopAuthClient =  createAuthClient({
    //you can pass client configuration here
    // baseURL: BASE_URL,
    basePath: `api/novaa-desktop-auth`
})

export const authClient =  createAuthClient({
    //you can pass client configuration here
})

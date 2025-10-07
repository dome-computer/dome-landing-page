import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import {
  mfirestore_client,
  mfirestore_db,
} from "@/shared/firestore-handlers/firestore-config";
import { createAuthMiddleware } from "better-auth/api";
/* import { cookies } from "next/headers";
 */ import { BASE_URL } from "@/shared/constants";
/* import { createAuthClient } from "better-auth/client";
 */
export const auth = betterAuth({
  database: mongodbAdapter(mfirestore_db, {
    client: mfirestore_client,
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    },
  },
  hooks: {
    // before: createAuthMiddleware(async (ctx) => {
    //     const cki = await cookies()
    //     const rs_hdr = (new URLSearchParams(ctx.headers?.get('referer')?.split('?')[1]))
    //     console.log("rs_hdr.get('rs')", rs_hdr.get('rs'), ctx.headers?.get('referer'))
    //     if (!cki.get('req_source') && rs_hdr.get('rs')) {
    //         console.log("Iwill set cookie678")
    //         cki.set("req_source", rs_hdr.get('rs') as string)
    //     }
    // }),
    after: createAuthMiddleware(async (ctx) => {
      console.log("ctx.context?.session", ctx.context?.session);
      // ctx.redirect(`${BASE_URL}dashboard`)
    }),
  },
  plugins: [nextCookies()], // make sure this is the last plugin in the array
});

export const novaa_desktop_auth = betterAuth({
    baseURL: BASE_URL,
    // trustedOrigins: ["https://dome.computer", "http://localhost"],
    basePath: `api/novaa-desktop-auth`,
    database: mongodbAdapter(mfirestore_db, {
        client: mfirestore_client
    }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            prompt: "select_account", 
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
        },
    },    
    hooks: {
        after: createAuthMiddleware(async (ctx) => {
            ctx.redirect(BASE_URL+`open-lk`)
        }),
    },
    plugins: [nextCookies()], // make sure this is the last plugin in the array
})

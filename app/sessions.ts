// app/sessions.js
import { createCookieSessionStorage } from "remix";

const isProd = process.env.NODE_ENV === "production";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
      name: `amaranto_${!isProd && "DEV_"}session`,
      secure: true,
    }
  });

export { getSession, commitSession, destroySession };
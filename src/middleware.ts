import { createClient, OAuthStrategy } from "@wix/sdk";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const cookies = request.cookies;
  const res = NextResponse.next();

  if (cookies.get("refreshToken")) {
    return res;
  }

  // if we don't have refreshtoken we gonna create a client
  const wixClient = createClient({
    auth: OAuthStrategy({ clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID! }),
  });
  // generating our tokens
  const tokens = await wixClient.auth.generateVisitorTokens();
  res.cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
};

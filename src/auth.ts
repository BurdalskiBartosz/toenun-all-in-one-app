import NextAuth from "next-auth";
import { encode as defaultEncode } from "next-auth/jwt";
import { v4 as uuid } from "uuid";
import authConfig from "./auth-config";
import { AuthRestAdapter } from "./utils/auth-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: AuthRestAdapter(),
  callbacks: {
    async jwt({ token, account }) {
      if (account?.provider === "credentials") {
        token.credentials = true;
      }
      return token;
    },
  },
  jwt: {
    encode: async (params) => {
      if (params.token?.credentials) {
        const sessionToken = uuid();

        if (!params.token.sub) {
          throw new Error("No user ID found in token");
        }

        const createdSession = await AuthRestAdapter()?.createSession?.({
          sessionToken,
          userId: params.token.sub,
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        });

        if (!createdSession) {
          throw new Error("Failed to create session");
        }

        return sessionToken;
      }
      return defaultEncode(params);
    },
  },
  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60,
  },
  ...authConfig,
});

import NextAuth from "next-auth";
import authConfig from "./auth-config";
import { AuthRestAdapter } from "./utils/auth-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: AuthRestAdapter(),
  // pages: {
  //   signIn: "/login",
  // },
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
    async jwt({ token, user, account }) {
      console.log(token, user, account);
      if (account?.provider === "credentials") {
        const expires = new Date(Date.now() + 60 * 60 * 24 * 30 * 1000);
        const sessionToken = "c1accd0f-d312-41cc-ab2b-0cf1a9c31886"; //randomUUID
        console.log({
          userId: user.id!,
          sessionToken,
          expires,
        });

        const session = await AuthRestAdapter().createSession!({
          userId: user.id!,
          sessionToken,
          expires,
        });

        await AuthRestAdapter().linkAccount!({
          userId: user.id!,
          type: "email",
          providerAccountId: account.providerAccountId,
          provider: account.provider,
        });

        token.sessionId = session.sessionToken;
      }

      return token;
    },
  },
  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60,
  },
  ...authConfig,
});

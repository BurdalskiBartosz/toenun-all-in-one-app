import NextAuth from "next-auth";
import authConfig from "./auth-config";
import { AuthRestAdapter } from "./utils/auth-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: AuthRestAdapter(),
  pages: {
    signIn: "/login",
  },
  callbacks: {
    session({ session, user }) {
      console.log("session");
      session.user.id = user.id;
      return session;
    },
  },
  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60,
  },
  ...authConfig,
});

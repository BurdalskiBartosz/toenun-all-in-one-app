import NextAuth, { NextAuthConfig } from "next-auth";
import authConfig from "./auth-config";
import { AuthRestAdapter } from "./utils/auth-adapter";

const callbacks = (): NextAuthConfig["callbacks"] => {
  return {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  };
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: AuthRestAdapter(),
  pages: {
    signIn: "/login",
  },
  callbacks: callbacks(),
  ...authConfig,
});

import NextAuth, { NextAuthConfig } from "next-auth";
import { Provider } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";

const getUser = async () => {
  return {
    id: "db5ffce7-5685-4dbb-ae5b-ad336e670031",
    email: "bosokpl13@gmail.com",
  };
};

const providers: Provider[] = [
  Credentials({
    credentials: {
      email: {},
      password: {},
    },
    authorize: async (credentials) => {
      if (!credentials) return null;

      let user = null;

      user = await getUser();

      return user;
    },
  }),
];

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
  providers,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: callbacks(),
});

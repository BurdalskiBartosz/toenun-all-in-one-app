import NextAuth from "next-auth";
import { Provider } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";
import { LoginFormType } from "./types/forms";

const getUser = async (data: LoginFormType) => {
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

      const data = {
        email: credentials.email as string,
        password: credentials.password as string,
      };

      user = await getUser(data);

      return user;
    },
  }),
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    },
  },
});

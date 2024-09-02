import NextAuth from "next-auth";
import type { Provider } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";

const getUser = async () => {
  return {
    id: "Admin123",
    token: "123",
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
      let user = null;

      user = await getUser();

      return user;
    },
  }),
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt({ token, user }) {
      console.log(token, user, "jwt");
      if (user) {
        // User is available during sign-in
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      console.log(session, "session");
      console.log(token, "token");
      return session;
    },
  },
});

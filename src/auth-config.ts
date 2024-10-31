import { NextAuthConfig } from "next-auth";
import { Provider } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";

const getUser = async () => {
  return {
    id: "cm2x1m6fu000014ayavmaolg9",
    email: "bosokpl13@gmail.com",
  };
};

const providers: Provider[] = [
  Github({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  }),
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

export default {
  providers,
} satisfies NextAuthConfig;

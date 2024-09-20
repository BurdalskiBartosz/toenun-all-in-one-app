import { NextAuthConfig } from "next-auth";
import { Provider } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";

const getUser = async () => {
  return {
    id: "db5ffce7-5685-4dbb-ae5b-ad336e670031",
    email: "admin123@gmail.com",
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

export default {
  providers,
} satisfies NextAuthConfig;

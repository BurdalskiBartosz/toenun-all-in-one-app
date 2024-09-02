import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      token: string;
      email: string;
    } & DefaultSession["user"];
  }
  interface User {
    id: string;
    email: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      token: string;
      email: string;
    };
  }
}

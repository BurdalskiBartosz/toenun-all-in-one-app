import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    email: string;
  }

  interface Session {
    user: User;
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
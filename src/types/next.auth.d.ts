import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      token: string;
      email: string;
    };
  }
  interface User {
    id: string;
    token: string;
    email: string;
  }
}

// declare module "next-auth/jwt" {
//   interface JWT {
//     user: {
//       id: string;
//       token: string;
//       email: string;
//     };
//   }
// }

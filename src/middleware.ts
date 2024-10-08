import { auth } from "./auth";

export default auth(async (req) => {
  const isLoggedIn = !!req.auth;
  console.log(isLoggedIn, "middleware");
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};

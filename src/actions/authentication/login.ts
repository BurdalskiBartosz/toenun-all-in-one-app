"use server";

import { signIn, signOut } from "@/auth";
import type { LoginFormType } from "@/types/forms";
import { loginSchema } from "@/utils/validations";
import { AuthError } from "next-auth";

export type LoginTypes = "credentials" | "github";

export async function login(type: LoginTypes, values?: LoginFormType) {
  try {
    if (type !== "credentials" || !values) {
      await signIn(type, {
        // redirectTo: "/app/dashboard",
      });
      return;
    }

    const parsedValues = loginSchema.safeParse(values);

    if (!parsedValues.success) {
      return { error: "Invalid data!" };
    }

    const { email, password } = values;
    await signIn(type, { email, password, redirectTo: "/app/dashboard" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        case "CallbackRouteError":
          return { error: error.cause?.err?.toString() };
        default:
          return { error: "Somtehing went wrong!" };
      }
    }
    throw error;
  }
}

export async function logout() {
  await signOut({ redirectTo: "/login" });
}

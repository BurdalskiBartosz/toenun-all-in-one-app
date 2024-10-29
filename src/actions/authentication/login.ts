"use server";

import { signIn, signOut } from "@/auth";
import type { LoginFormType } from "@/types/forms";
import { loginSchema } from "@/utils/validations";
import { AuthError } from "next-auth";

type LoginTypes = "credentials" | "github";

export async function login(type: LoginTypes, values?: LoginFormType) {
  try {
    if (type !== "credentials") {
      await signIn(type, {
        callbackUrl: "/app/dashboard",
      });
      return;
    }

    const parsedValues = loginSchema.safeParse(values);

    if (!parsedValues.success) {
      return { error: "Invalid data!" };
    }
    await signIn(type, values);
  } catch (error) {
    if (error instanceof AuthError) {
      throw error;
    }
    console.error(error);
  }
}

export async function logout() {
  await signOut({ redirectTo: "/login" });
}

"use server";

import { signIn, signOut } from "@/auth";
import type { LoginFormType } from "@/types/forms";
import { loginSchema } from "@/utils/validations";
import { AuthError } from "next-auth";

export async function login(values: LoginFormType) {
  const parsedValues = loginSchema.safeParse(values);

  if (!parsedValues.success) {
    return { error: "Invalid data!" };
  }
  try {
    await signIn("credentials", values);
  } catch (error) {
    if (error instanceof AuthError) {
      throw error;
    }
  }
}

export async function logout() {
  await signOut({ redirectTo: "/login" });
}

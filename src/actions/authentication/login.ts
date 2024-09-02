"use server";

import { signIn, signOut } from "@/auth";
import type { LoginFormType } from "@/types/forms";
import { AuthError } from "next-auth";

export async function login(data: LoginFormType) {
  try {
    await signIn("credentials", data);
  } catch (error) {
    if (error instanceof AuthError) {
      throw error;
    }
  }
}

export async function logout() {
  await signOut({ redirectTo: "/login" });
}

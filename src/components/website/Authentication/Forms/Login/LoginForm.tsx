"use client";
import { login } from "@/actions/authentication/login";
import Input from "@/components/ui/Input";
import type { LoginFormType } from "@/types/forms";
import { loginSchema } from "@/utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginFormType) {
    await login("credentials", data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
        <Input
          label="Email"
          placeholder="Enter your email..."
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          label="Password"
          placeholder="Enter your password..."
          error={errors.password?.message}
          {...register("password")}
        />
        <button
          type="submit"
          className="mt-6 rounded-lg bg-black p-3 text-white"
        >
          Sign in
        </button>
      </form>
      <button
        className="mt-1 rounded bg-red-500 p-2"
        onClick={() => {
          signIn("github", {
            callbackUrl: "/app/dashboard",
          });
        }}
      >
        Github
      </button>
    </>
  );
}

"use client";
import { login } from "@/actions/authentication/login";
import Input from "@/components/webiste/Form/Input";
import type { LoginFormType } from "@/types/forms";
import { loginSchema } from "@/utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  async function onSubmit(data: LoginFormType) {
    try {
      await login(data);

      router.push("/app/dashboard");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="flex grow flex-col">
      <h1 className="mb-10 text-[3.5rem] text-gray-600">Sign in</h1>
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
      <div className="text-md mt-10 flex justify-center text-gray-600">
        <p className="mr-2">Don't have an account?</p>
        <Link className="font-bold" href={"/registration"}>
          Register
        </Link>
      </div>
    </div>
  );
}

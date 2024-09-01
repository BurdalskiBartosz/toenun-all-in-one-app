"use client";
import Input from "@/components/webiste/Form/Input";
import { LoginFormType } from "@/types/forms";
import { loginSchema } from "@/utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormType) => {
    console.log(data);
    console.log(errors, "elo");
  };

  return (
    <div className="flex grow flex-col">
      <h1 className="mb-10 text-[3.5rem] text-gray-600">Zaloguj się</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
        <Input
          label="Login"
          placeholder="Wprowadź login..."
          error={errors.login?.message}
          {...register("login")}
        />
        <Input
          label="Password"
          placeholder="Wprowadź hasło..."
          error={errors.password?.message}
          {...register("password")}
        />
        <button className="mt-6 rounded-lg bg-black p-3 text-white">
          Zaloguj się
        </button>
      </form>
      <div className="text-md mt-10 flex justify-center text-gray-600">
        <p className="mr-2">Nie posiadasz konta ?</p>
        <Link className="font-bold" href={"/registration"}>
          Register
        </Link>
      </div>
    </div>
  );
}

"use client";
import Input from "@/components/webiste/Form/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import { RegistrationFormType } from "@/types/forms";
import { registrationSchema } from "@/utils/validations";
import { useForm } from "react-hook-form";

export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormType>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = (data: RegistrationFormType) => {
    console.log(data);
  };
  return (
    <div className="flex grow flex-col">
      <h1 className="mb-10 text-[3.5rem] text-gray-600">Zarejestruj się</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-9">
        <Input
          label="Login"
          placeholder="Wprowadź login..."
          error={errors.login?.message}
          {...register("login")}
        />
        <Input
          label="Email"
          placeholder="Wprowadź adres email..."
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          label="Password"
          placeholder="Wprowadź hasło..."
          error={errors.password?.message}
          {...register("password")}
        />
        <Input
          label="Confirm password"
          placeholder="Wprowadź ponownie hasło..."
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />
        <button className="mt-2 rounded-lg bg-black p-3 text-white">
          Zarejestruj się
        </button>
      </form>
      <div className="text-md mt-10 flex justify-center text-gray-600">
        <p className="mr-2">Posiadasz konto ?</p>
        <Link className="font-bold" href={"/login"}>
          Login
        </Link>
      </div>
    </div>
  );
}

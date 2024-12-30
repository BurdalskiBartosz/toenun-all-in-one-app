"use client";
import Input from "@/components/ui/Input";
import { RegistrationFormType } from "@/types/forms";
import { registrationSchema } from "@/utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function RegistrationForm() {
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
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-9">
      <Input
        label="Login"
        placeholder="Enter your login..."
        error={errors.login?.message}
        {...register("login")}
      />
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
      <Input
        label="Confirm password"
        placeholder="Confirm password..."
        error={errors.confirmPassword?.message}
        {...register("confirmPassword")}
      />
      <button className="mt-2 rounded-lg bg-black p-3 text-white">
        Sign up
      </button>
    </form>
  );
}

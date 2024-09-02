import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const registrationSchema = z
  .object({
    email: z.string().email(),
    login: z.string().min(5),
    password: z.string().regex(/[A-Z]/, {
      message: "Password has to contain at least one big letter",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

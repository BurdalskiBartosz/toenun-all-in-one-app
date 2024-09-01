import { loginSchema, registrationSchema } from "@/utils/validations";
import { z } from "zod";

export type LoginFormType = z.infer<typeof loginSchema>;

export type RegistrationFormType = z.infer<typeof registrationSchema>;

import { HTMLAttributes } from "react";

export type InputProps = {
  label: string;
  fullWidth?: boolean;
  error?: string;
  placeholder: string;
} & HTMLAttributes<HTMLInputElement>;

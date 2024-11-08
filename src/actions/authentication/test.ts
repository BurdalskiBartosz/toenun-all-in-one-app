"use server";

import { fetchFn } from "@/utils/fetchFn";
import { AdapterUser } from "next-auth/adapters";

const BASE_AUTH_URL = `${process.env.BACKEND_URL}/auth`;

export async function createUser(user: Omit<AdapterUser, "id">) {
  const data = await fetchFn(BASE_AUTH_URL, {
    method: "POST",
    body: JSON.stringify(user),
  });

  return format<AdapterUser>(data as Record<string, unknown>);
}

function format<T>(obj: Record<string, unknown>): T {
  return Object.entries(obj).reduce(
    (result, [key, value]) => {
      const newResult = result;

      if (value === null) {
        return newResult;
      }

      if (isDate(value)) {
        newResult[key] = new Date(value);
      } else {
        newResult[key] = value;
      }

      return newResult;
    },
    {} as Record<string, unknown>,
  ) as T;
}
const isDate = (value: unknown): value is string =>
  typeof value === "string"
    ? new Date(value).toString() !== "Invalid Date" &&
      !Number.isNaN(Date.parse(value))
    : false;

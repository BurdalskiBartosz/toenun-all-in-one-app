"use server";

import { AdapterUser } from "next-auth/adapters";

const BASE_AUTH_URL = `${process.env.BACKEND_URL}/auth`;

const fetchFn = async <T>(baseUrl: string, input: T) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
      "x-auth-secret": process.env.AUTH_SECRET || "",
    },
  });
  const data = await response.json();
  return data;
};

export async function createUser(user: Omit<AdapterUser, "id">) {
  const data = await fetchFn(BASE_AUTH_URL, user);
  console.log("test", data);
  // const response = await client.post("/", user);
  return format<AdapterUser>(data);
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

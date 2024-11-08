export const fetchFn = async <T>(
  baseUrl: string,
  rest: RequestInit,
): Promise<T> => {
  const response = await fetch(baseUrl, {
    headers: {
      "Content-Type": "application/json",
      "x-auth-secret": process.env.AUTH_SECRET || "",
    },
    ...rest,
  });

  const data = (await response.json()) as T;

  return data;
};

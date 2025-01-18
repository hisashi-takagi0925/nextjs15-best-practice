"use server";

import { CustomHttpError } from "./customHttpError";
import { errorHandler } from "./errorHandler";
import { FetcherProps } from "./types";

export const fetcher = async <T>({
  url,
  method,
  body,
  options = {},
  onSuccess,
  onError,
  onSettled,
}: FetcherProps<T>): Promise<T | undefined> => {
  try {
    const response = await fetch(url, {
      ...options,
      method,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      cache: "force-cache",
    });

    if (!response.ok) {
      throw new CustomHttpError(response.status, response.statusText);
    }

    const contentType = response.headers.get("content-type");
    const data: T = contentType?.includes("application/json")
      ? await response.json()
      : await response.text();

    onSuccess?.(data);
    return data;
  } catch (error) {
    errorHandler({ error, onError });
  } finally {
    onSettled?.();
  }
};

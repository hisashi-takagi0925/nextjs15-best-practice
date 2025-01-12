import { CustomHttpError } from "./customHttpError";

export type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export type FetcherProps<T> = {
  url: string;
  method: Method;
  body?: unknown;
  options?: RequestInit;
  onSuccess?: (data: T) => void;
  onError?: (error: CustomHttpError) => void;
  onSettled?: () => void;
};

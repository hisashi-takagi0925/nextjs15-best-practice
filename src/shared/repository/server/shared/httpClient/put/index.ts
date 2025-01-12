"use server";

import { fetcher } from "../../fetcher";
import { FetcherProps } from "../../fetcher/types";

type PutProps<T> = Omit<FetcherProps<T>, "method">;

export const httpPut = async <T>({
  url,
  body,
  options,
  onSuccess,
  onError,
  onSettled,
}: PutProps<T>): Promise<T | undefined> => {
  return fetcher<T>({
    url,
    method: "PUT",
    body,
    options,
    onSuccess,
    onError,
    onSettled,
  });
};

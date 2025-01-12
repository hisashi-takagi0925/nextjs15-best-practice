"use server";

import { fetcher } from "../../fetcher";
import { FetcherProps } from "../../fetcher/types";

type DeleteProps<T> = Omit<FetcherProps<T>, "method">;

export const httpDelete = async <T>({
  url,
  options,
  onSuccess,
  onError,
  onSettled,
}: DeleteProps<T>): Promise<T | undefined> => {
  return fetcher<T>({
    url,
    method: "DELETE",
    options,
    onSuccess,
    onError,
    onSettled,
  });
};

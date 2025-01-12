"use server";

import { FetcherProps } from "../../fetcher/types";
import { fetcher } from "../../fetcher";

type PatchProps<T> = Omit<FetcherProps<T>, "method">;

export const httpPatch = async <T>({
  url,
  body,
  options,
  onSuccess,
  onError,
  onSettled,
}: PatchProps<T>): Promise<T | undefined> => {
  return fetcher<T>({
    url,
    method: "PATCH",
    body,
    options,
    onSuccess,
    onError,
    onSettled,
  });
};

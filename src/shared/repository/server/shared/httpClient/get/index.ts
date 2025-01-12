"use server";

import { fetcher } from "../../fetcher";
import { FetcherProps } from "../../fetcher/types";

type GetProps<T> = Omit<FetcherProps<T>, "method"> & {
  tags?: string[];
};

export const httpGet = async <T>({
  url,
  tags,
  options,
  onSuccess,
  onError,
  onSettled,
}: GetProps<T>): Promise<T | undefined> => {
  const revalidateOptions = {
    next: {
      cache: "force-cache",
      tags,
    },
  };

  return fetcher<T>({
    url,
    method: "GET",
    options: {
      ...options,
      ...revalidateOptions,
    },
    onSuccess,
    onError,
    onSettled,
  });
};

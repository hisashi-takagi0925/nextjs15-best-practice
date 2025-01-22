"use server";

import { httpGet } from "@/shared/repository/server/shared/httpClient/get";
import { GetPostResponse } from "./types";
import { generatePostTag } from "./tag";

export const getPost = async (
  id: string
): Promise<GetPostResponse | undefined> => {
  return await httpGet<GetPostResponse>({
    tags: generatePostTag(id),
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
  });
};

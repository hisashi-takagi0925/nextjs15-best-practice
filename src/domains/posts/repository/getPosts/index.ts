"use server";

import { httpGet } from "@/shared/repository/server/shared/httpClient/get";
import { generatePostsTag } from "./tag";
import { GetPostsResponse } from "./types";

export const getPosts = async (): Promise<GetPostsResponse | undefined> => {
  return await httpGet<GetPostsResponse>({
    tags: generatePostsTag(),
    url: "https://jsonplaceholder.typicode.com/posts",
  });
};

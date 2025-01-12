import { httpGet } from "@/shared/repository/server/shared/httpClient/get";
import { generatePostsTag } from "./tag";
import { GetPostsResponse } from "./types";
import { revalidate } from "@/shared/repository/server/shared/httpClient/revalidate";

export const getPosts = async (): Promise<GetPostsResponse | undefined> => {
  return await httpGet<GetPostsResponse>({
    tags: generatePostsTag(),
    url: "https://jsonplaceholder.typicode.com/posts",
  });
};

export const revalidatePosts = async () => {
  return await revalidate({
    tag: generatePostsTag().toString(),
  });
};

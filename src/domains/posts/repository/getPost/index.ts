import { httpGet } from "@/shared/repository/server/shared/httpClient/get";
import { revalidate } from "@/shared/repository/server/shared/httpClient/revalidate";
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

export const revalidatePost = async (id: string) => {
  return await revalidate({
    tag: generatePostTag(id).toString(),
  });
};

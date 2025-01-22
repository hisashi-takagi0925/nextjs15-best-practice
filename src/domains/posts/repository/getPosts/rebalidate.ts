"use server";

import { revalidate } from "@/shared/repository/server/shared/httpClient/revalidate";
import { generatePostsTag } from "./tag";

export const revalidatePosts = async () => {
  return await revalidate({
    tag: generatePostsTag().toString(),
  });
};

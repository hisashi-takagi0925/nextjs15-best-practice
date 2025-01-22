"use server";

import { revalidate } from "@/shared/repository/server/shared/httpClient/revalidate";
import { generatePostTag } from "./tag";

export const revalidatePost = async (id: string) => {
  return await revalidate({
    tag: generatePostTag(id).toString(),
  });
};

"use server";

import { revalidateTag } from "next/cache";

type RevalidateProps = {
  tag: string;
};

export const revalidate = async ({ tag }: RevalidateProps): Promise<void> => {
  revalidateTag(tag);
};

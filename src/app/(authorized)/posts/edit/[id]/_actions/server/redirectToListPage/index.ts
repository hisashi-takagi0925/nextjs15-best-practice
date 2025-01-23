"use server";

import { redirect } from "next/navigation";

export const redirectToListPage = async () => {
  redirect(`/posts/list`);
};

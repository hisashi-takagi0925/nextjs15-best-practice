"use server";

import { redirect } from "next/navigation";

export const redirectToListPage = () => {
  redirect(`/posts`);
};

"use server";

import { redirect } from "next/navigation";

export const redirectToEditPage = (id: string) => {
  redirect(`/posts/edit/${id}`);
};

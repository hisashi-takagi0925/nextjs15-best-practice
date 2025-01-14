"use server";

import { redirect } from "next/navigation";

export const redirectToEditPage = async (id: string) => {
  redirect(`/posts/edit/${id}`);
};

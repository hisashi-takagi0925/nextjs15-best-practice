"use server";

import { redirect } from "next/navigation";

export const redirectToCreatePage = () => {
  redirect("/posts/create");
};

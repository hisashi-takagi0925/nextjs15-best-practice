"use client";

import { Post } from "@/domains/posts/repository/getPosts/types";
import { FormProvider, useForm } from "@conform-to/react";
export const FORM_ID = "post-edit-form";

type Props = {
  post: Post;
  children: React.ReactNode;
};

export const Form = ({ post, children }: Props) => {
  const [form] = useForm<Post>({
    id: FORM_ID,
    defaultValue: post,
  });

  const onSubmit = async (formData: FormData) => {
    console.log(formData);
  };

  return (
    <FormProvider context={form.context}>
      <form id={form.id} action={onSubmit}>
        {children}
      </form>
    </FormProvider>
  );
};

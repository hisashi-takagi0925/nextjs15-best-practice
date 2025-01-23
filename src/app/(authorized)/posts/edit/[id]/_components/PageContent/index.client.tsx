"use client";

import { InputFormLayout } from "@/shared/components/server/layout/InputFormLayout";
import { Body } from "./Body/index.client";
import { Post } from "@/domains/posts/repository/getPosts/types";
import { postSchema } from "@/domains/posts/schema";
import { Title } from "./Title";
import { updatePost } from "../../_actions/server/updatePost";
import { SubmitButton } from "./SubmitButton";
import { CancelButton } from "./CancelButton/index.client";
import { FORM_ID } from "../../_constants";

type Props = {
  data: Post;
};

export const PageContent = ({ data }: Props) => {
  return (
    <InputFormLayout
      formId={FORM_ID}
      formTitle="編集"
      defaultValue={data}
      schema={postSchema}
      submitButton={<SubmitButton />}
      cancelButton={<CancelButton />}
      onSubmit={updatePost}
    >
      <Title />
      <Body />
    </InputFormLayout>
  );
};

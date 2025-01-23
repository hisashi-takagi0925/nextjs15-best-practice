"use client";

import { InputFormLayout } from "@/shared/components/server/layout/InputFormLayout";
import { Body } from "./Body/index.client";
import { Post } from "@/domains/posts/repository/getPosts/types";
import { postSchema } from "@/domains/posts/schema";
import { Title } from "./Title";
import { useCancelForm } from "../../_actions/client/useCancelForm";

export const FORM_ID = "post-edit-form";

type Props = {
  data: Post;
};

export const PageContent = ({ data }: Props) => {
  const { openDialog } = useCancelForm();

  return (
    <InputFormLayout
      formId={FORM_ID}
      formTitle="編集"
      defaultValue={data}
      schema={postSchema}
      submitButton={{
        label: "保存",
        onSubmit: (formData) => {
          console.log(formData);
        },
      }}
      cancelButton={{
        label: "キャンセル",
        onClick: openDialog,
      }}
    >
      <Title />
      <Body />
    </InputFormLayout>
  );
};

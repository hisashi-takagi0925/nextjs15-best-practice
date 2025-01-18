"use client";

import { getInputProps, useField } from "@conform-to/react";
import { Input } from "@/shared/components/client/Input";
import { FORM_ID } from "../index.client";

export const Title = () => {
  const [meta] = useField<string>("title", {
    formId: FORM_ID,
  });

  return (
    <Input
      label="タイトル"
      placeholder="タイトルを入力してください"
      maxLength={100}
      currentLength={meta.value?.length}
      required
      errorMessage={"エラーです"}
      {...getInputProps(meta, { type: "text" })}
    />
  );
};

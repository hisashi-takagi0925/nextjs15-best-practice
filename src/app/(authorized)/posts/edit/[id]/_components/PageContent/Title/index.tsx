"use client";

import { getInputProps, useField } from "@conform-to/react";
import { Input } from "@/shared/components/client/Input";
import { FORM_ID } from "../../../_constants";

export const Title = () => {
  const [meta] = useField<string>("title", {
    formId: FORM_ID,
  });

  const { key, ...inputProps } = getInputProps(meta, { type: "text" });

  return (
    <Input
      label="タイトル"
      placeholder="タイトルを入力してください"
      maxLength={100}
      currentLength={meta.value?.length ?? 0}
      required
      errorMessage={meta.errors?.join(",").toString()}
      defaultValue={meta.value}
      key={key}
      {...inputProps}
    />
  );
};

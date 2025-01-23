"use client";

import { getInputProps, useField } from "@conform-to/react";
import { Textarea } from "@/lib/shadcn/components/ui/textarea";
import { FORM_ID } from "../../../_constants";

export const Body = () => {
  const [meta] = useField<string>("body", {
    formId: FORM_ID,
  });

  const { key, ...inputProps } = getInputProps(meta, { type: "text" });

  return (
    <>
      <Textarea className="h-80" key={key} {...inputProps} />
      <div className="flex justify-end">
        <p className="text-sm text-muted-foreground">
          {meta.value?.length ?? 0}文字
        </p>
      </div>
    </>
  );
};

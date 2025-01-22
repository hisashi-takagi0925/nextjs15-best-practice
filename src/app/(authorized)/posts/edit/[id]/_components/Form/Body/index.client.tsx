"use client";

import { getInputProps, useField } from "@conform-to/react";
import { FORM_ID } from "../index.client";
import { Textarea } from "@/lib/shadcn/components/ui/textarea";

export const Body = () => {
  const [meta] = useField<string>("body", {
    formId: FORM_ID,
  });

  return (
    <>
      <Textarea className="h-80" {...getInputProps(meta, { type: "text" })} />
      <div className="flex justify-end">
        <p className="text-sm text-muted-foreground">
          {meta.value?.length ?? 0}文字
        </p>
      </div>
    </>
  );
};

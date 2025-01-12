"use client";

import { getInputProps, useField } from "@conform-to/react";
import { FORM_ID } from "../index.client";
import { Input } from "@/lib/shadcn/components/ui/input";

export const Title = () => {
  const [meta] = useField<string>("title", {
    formId: FORM_ID,
  });

  return <Input {...getInputProps(meta, { type: "text" })} />;
};

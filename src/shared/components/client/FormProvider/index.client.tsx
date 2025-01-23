"use client";

import {
  DefaultValue,
  FormProvider as ConformFormProvider,
  useForm,
} from "@conform-to/react";
import { z } from "zod";
import { parseWithZod } from "@conform-to/zod";

type Props<T> = {
  formId: string;
  defaultValue: DefaultValue<T>;
  onSubmit: (formData: FormData) => void;
  schema: z.ZodSchema<T>;
  children: React.ReactNode;
};

export const FormProvider = <T extends Record<string, unknown>>({
  formId,
  defaultValue,
  onSubmit,
  schema,
  children,
}: Props<T>) => {
  const [form] = useForm<T>({
    id: formId,
    defaultValue: defaultValue,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
    shouldValidate: "onBlur",
  });

  return (
    <ConformFormProvider context={form.context}>
      <form id={form.id} action={onSubmit} noValidate>
        {children}
      </form>
    </ConformFormProvider>
  );
};

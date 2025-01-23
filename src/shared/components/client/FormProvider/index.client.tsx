"use client";

import {
  DefaultValue,
  FormProvider as ConformFormProvider,
  useForm,
} from "@conform-to/react";
import { z } from "zod";
import { parseWithZod } from "@conform-to/zod";
import { useActionState } from "react";

type Props<T> = {
  formId: string;
  defaultValue: DefaultValue<T>;
  onSubmit: (
    prevState: unknown,
    formData: FormData
  ) => Promise<null | undefined>;
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
  const [lastResult, action] = useActionState(onSubmit, undefined);
  const [form] = useForm<T>({
    lastResult,
    id: formId,
    defaultValue: defaultValue,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
    shouldValidate: "onInput",
  });

  return (
    <ConformFormProvider context={form.context}>
      <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
        {children}
      </form>
    </ConformFormProvider>
  );
};

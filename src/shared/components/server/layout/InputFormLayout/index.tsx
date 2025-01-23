"use client";

import { FormProvider } from "@/shared/components/client/FormProvider/index.client";
import { DefaultValue } from "@conform-to/react";
import { z } from "zod";
import { FeatureContainerLayout } from "../FeatureContainerLayout";

type Props<T> = {
  formId: string;
  formTitle: string;
  defaultValue: DefaultValue<T>;
  schema: z.ZodSchema<T>;
  children: React.ReactNode;
  cancelButton: React.ReactNode;
  submitButton: React.ReactNode;
  onSubmit: (formData: FormData) => void;
};

export const InputFormLayout = <T extends Record<string, unknown>>({
  formId,
  formTitle,
  defaultValue,
  schema,
  children,
  cancelButton,
  submitButton,
  onSubmit,
}: Props<T>) => {
  return (
    <FeatureContainerLayout title={formTitle}>
      <FormProvider
        formId={formId}
        onSubmit={onSubmit}
        defaultValue={defaultValue}
        schema={schema}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">{children}</div>
          <div className="flex justify-center p-4 items-center gap-4">
            {cancelButton}
            {submitButton}
          </div>
        </div>
      </FormProvider>
    </FeatureContainerLayout>
  );
};

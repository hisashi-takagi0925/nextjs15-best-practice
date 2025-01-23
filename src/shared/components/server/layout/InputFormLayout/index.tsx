"use client";

import { Button } from "@/lib/shadcn/components/ui/button";
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
  cancelButton: {
    label: string;
    onClick: () => void;
  };
  submitButton: {
    label: string;
    onSubmit: (formData: FormData) => void;
  };
};

export const InputFormLayout = <T extends Record<string, unknown>>({
  formId,
  formTitle,
  defaultValue,
  schema,
  children,
  cancelButton,
  submitButton,
}: Props<T>) => {
  return (
    <FeatureContainerLayout title={formTitle}>
      <FormProvider
        formId={formId}
        onSubmit={submitButton?.onSubmit}
        defaultValue={defaultValue}
        schema={schema}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">{children}</div>
          <div className="flex justify-center p-4 items-center gap-4">
            <Button
              variant="outline"
              className="min-w-24 font-bold"
              type="button"
              onClick={cancelButton?.onClick}
            >
              {cancelButton.label}
            </Button>
            <Button type="submit" className="min-w-24 font-bold">
              {submitButton.label}
            </Button>
          </div>
        </div>
      </FormProvider>
    </FeatureContainerLayout>
  );
};

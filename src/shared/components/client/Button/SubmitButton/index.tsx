"use client";

import { Button } from "@/lib/shadcn/components/ui/button";

type Props = {
  label?: string;
  onClick: () => void;
};

export const SubmitButton = ({ label = "送信", onClick }: Props) => {
  return (
    <Button onClick={onClick} className="min-w-24 font-bold">
      {label}
    </Button>
  );
};

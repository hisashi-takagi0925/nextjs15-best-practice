"use client";

import { Button } from "@/lib/shadcn/components/ui/button";

type Props = {
  label?: string;
  onClick: () => void;
};

export const CancelButton = ({ label = "キャンセル", onClick }: Props) => {
  return (
    <Button onClick={onClick} variant="outline" className="min-w-24 font-bold">
      {label}
    </Button>
  );
};

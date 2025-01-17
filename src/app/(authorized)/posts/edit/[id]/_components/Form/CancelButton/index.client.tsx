"use client";

import { Button } from "@/lib/shadcn/components/ui/button";
import { useCancelForm } from "../../../_actions/client/useCancelForm";

export const CancelButton = () => {
  const { openDialog } = useCancelForm();

  return (
    <Button
      variant="outline"
      className="min-w-24 font-bold"
      onClick={openDialog}
    >
      キャンセル
    </Button>
  );
};

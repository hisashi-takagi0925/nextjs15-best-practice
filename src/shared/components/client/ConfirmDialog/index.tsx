"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/lib/shadcn/components/ui/dialog";
import { useConfirmDialog } from "@/shared/actions/client/useConfirmDiaog";
import { SubmitButton } from "../Button/SubmitButton";
import { CancelButton } from "../Button/CancelButton";

export const ConfirmDialog = () => {
  const { isOpen, dialog } = useConfirmDialog();

  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialog.title}</DialogTitle>
          <DialogDescription>{dialog.description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="flex justify-center items-center gap-4">
            {dialog.cancel && (
              <CancelButton onClick={dialog.cancel.onClick || (() => {})} />
            )}
            <SubmitButton
              label={dialog.submit.label}
              onClick={dialog.submit.onClick}
            />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

"use client";
import { Button } from "@/lib/shadcn/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/lib/shadcn/components/ui/dialog";
import { useConfirmDialog } from "@/shared/actions/client/useConfirmDiaog";

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
          {dialog.cancel && (
            <Button
              onClick={dialog.cancel.onClick}
              variant="outline"
              className="min-w-24 font-bold"
            >
              {dialog.cancel.label}
            </Button>
          )}
          <Button
            onClick={dialog.submit.onClick}
            className="min-w-24 font-bold"
          >
            {dialog.submit.label}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

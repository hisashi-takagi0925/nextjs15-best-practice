import { create } from "zustand";

type Props = {
  isOpen: boolean;
  dialog: {
    title: string;
    description: string;
    submit: {
      label: string;
      onClick: () => void;
    };
    cancel?: {
      label?: string;
      onClick?: () => void;
    };
  };
  confirmDialog: (dialog: Partial<Props["dialog"]>) => void;
};

const DEFAULT_DIALOG = {
  title: "",
  description: "",
  submit: {
    label: "OK",
    onClick: () => {},
  },
  cancel: {
    label: "キャンセル",
    onClick: () => {},
  },
};

const store = create<Props>()((set) => ({
  isOpen: false,
  dialog: DEFAULT_DIALOG,
  confirmDialog: (dialog: Partial<Props["dialog"]>) =>
    set((state) => ({
      dialog: {
        ...state.dialog,
        ...dialog,
        submit: {
          ...state.dialog.submit,
          onClick: () => {
            dialog.submit?.onClick();
            set({ isOpen: false, dialog: DEFAULT_DIALOG });
          },
        },
        cancel: {
          ...state.dialog.cancel,
          ...dialog.cancel,
          onClick: () => {
            set({ isOpen: false, dialog: DEFAULT_DIALOG });
          },
        },
      },
      isOpen: true,
    })),
}));

export const useConfirmDialog = () => {
  return {
    isOpen: store((state) => state.isOpen),
    dialog: store((state) => state.dialog),
    confirmDialog: store((state) => state.confirmDialog),
  };
};

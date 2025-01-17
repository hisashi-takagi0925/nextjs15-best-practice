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

const store = create<Props>()((set) => ({
  isOpen: false,
  dialog: {
    title: "",
    description: "",
    submit: {
      label: "OK",
      onClick: () => {},
    },
    cancel: {
      label: "キャンセル",
      onClick: () => set({ isOpen: false }),
    },
  },

  confirmDialog: (dialog: Partial<Props["dialog"]>) =>
    set((state) => ({
      dialog: {
        ...state.dialog,
        ...dialog,
        submit: {
          ...state.dialog.submit,
          onClick: () => {
            dialog.submit?.onClick();
            set({ isOpen: false });
          },
        },
        cancel: {
          ...state.dialog.cancel,
          ...dialog.cancel,
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

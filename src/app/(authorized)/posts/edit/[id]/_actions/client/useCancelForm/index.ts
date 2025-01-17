import { useConfirmDialog } from "@/shared/actions/client/useConfirmDiaog";
import { useRouter } from "next/navigation";

export const useCancelForm = () => {
  const router = useRouter();
  const { confirmDialog } = useConfirmDialog();

  const cancel = () => {
    router.back();
  };

  const openDialog = () => {
    confirmDialog({
      title: "キャンセルしますか？",
      description: "キャンセルすると、フォームの内容は削除されます。",
      submit: {
        label: "戻る",
        onClick: cancel,
      },
    });
  };

  return { openDialog };
};

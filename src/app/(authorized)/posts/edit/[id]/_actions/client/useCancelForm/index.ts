import { useConfirmDialog } from "@/shared/actions/client/useConfirmDiaog";
import { useRouter } from "next/navigation";

export const useCancelForm = () => {
  const router = useRouter();
  const { confirmDialog } = useConfirmDialog();

  const cancelForm = () => {
    router.push("/posts/list");
  };

  const openDialog = () => {
    confirmDialog({
      title: "キャンセルしますか？",
      description: "キャンセルすると、フォームの内容は削除されます。",
      submit: {
        label: "戻る",
        onClick: cancelForm,
      },
    });
  };

  return { openDialog };
};

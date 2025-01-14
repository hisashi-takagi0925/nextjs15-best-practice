import { getPost } from "@/domains/posts/repository/getPost";
import { Form } from "./_components/Form/index.client";
import { Title } from "./_components/Form/Title";
import { Body } from "./_components/Form/Body/index.client";
import { MainLayout } from "@/shared/components/server/layout/MainLayout";
import { Button } from "@/lib/shadcn/components/ui/button";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditPost({ params }: Props) {
  const id = (await params).id;
  const post = await getPost(id);
  const defaultValues = post ?? {
    userId: 0,
    id: 0,
    title: "",
    body: "",
  };

  return (
    <MainLayout
      title="編集"
      content={
        <Form post={defaultValues}>
          <Title />
          <Body />
        </Form>
      }
      cancelButton={
        <Button variant="outline" className="min-w-24 font-bold">
          キャンセル
        </Button>
      }
      submitButton={
        <Button type="submit" className="min-w-24 font-bold">
          保存
        </Button>
      }
    />
  );
}

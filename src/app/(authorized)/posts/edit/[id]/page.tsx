import { getPost } from "@/domains/posts/repository/getPost";
import { Form } from "./_components/Form/index.client";
import { Title } from "./_components/Form/Title";
import { Body } from "./_components/Form/Body/index.client";

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
    <Form post={defaultValues}>
      <Title />
      <Body />
    </Form>
  );
}

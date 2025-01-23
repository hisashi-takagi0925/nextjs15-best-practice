import { getPost } from "@/domains/posts/repository/getPost";
import { PageContent } from "./_components/PageContent/index.client";

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

  return <PageContent data={defaultValues} />;
}

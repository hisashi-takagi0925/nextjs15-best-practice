import { getPost } from "@/domains/posts/repository/getPost";

type Props = {
  params: { id: string };
};

export const generateFormValue = async ({ params }: Props) => {
  const id = params.id;
  const post = await getPost(id);
  const defaultValues = post ?? {
    userId: 0,
    id: 0,
    title: "",
    body: "",
  };

  return defaultValues;
};

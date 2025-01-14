import { Suspense } from "react";
import { PostList } from "../list/_components/PostList/index.server";
import { getPost } from "@/domains/posts/repository/getPost";

type Props = {
  params: { id: string };
};

export default async function Posts({ params }: Props) {
  const id = (await params).id;
  const post = await getPost(id);

  return (
    <Suspense>
      <PostList />
    </Suspense>
  );
}

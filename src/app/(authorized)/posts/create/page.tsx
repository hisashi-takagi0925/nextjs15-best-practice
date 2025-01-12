import { Suspense } from "react";
import { PostList } from "../list/_components/PostList/index.server";

export default function Posts() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostList />
    </Suspense>
  );
}

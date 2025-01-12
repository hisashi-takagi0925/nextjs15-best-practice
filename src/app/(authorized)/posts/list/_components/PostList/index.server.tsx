import { getPosts } from "@/domains/posts/repository/getPosts";
import { Table } from "@/shared/components/server/Table";
import { PostListRow } from "./PostListRow";
import { PostListColumns } from "./PostListColumns";

export const PostList = async () => {
  const posts = await getPosts();

  return (
    <Table
      title="Posts"
      columns={PostListColumns()}
      rows={PostListRow({ posts: posts ?? [] })}
    />
  );
};

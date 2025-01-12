import { Post } from "@/domains/posts/repository/getPosts/types";
import { TableRowDropdown } from "@/shared/components/server/TableRowDropdown";

type Props = {
  posts: Post[];
};

export const PostListRow = ({ posts }: Props): React.ReactNode[][] => {
  return posts.map((post) => [
    post.title,
    <TableRowDropdown
      key={post.id}
      actions={[
        { label: "Edit", action: () => console.log("Edit") },
        { label: "Delete", action: () => console.log("Delete") },
      ]}
    />,
  ]);
};

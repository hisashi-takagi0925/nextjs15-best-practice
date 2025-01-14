import { Post as PostType } from "@/domains/posts/repository/getPosts/types";
import { TableRowDropdown } from "@/shared/components/server/TableRowDropdown";
import { redirectToEditPage } from "../../../_actions/server/redirectToEditPage";
import { Post } from "./Post/index.server";

type Props = {
  posts: PostType[];
};

export const PostListRow = ({ posts }: Props): React.ReactNode[][] => {
  return posts.map((post) => [
    <Post key={post.id} post={post} />,

    <TableRowDropdown
      key={post.id}
      actions={[
        {
          label: "Edit",
          action: async () => {
            "use server";
            await redirectToEditPage(post.id.toString());
          },
        },
        {
          label: "Delete",
          action: async () => {
            "use server";
            console.log("Delete");
          },
        },
      ]}
    />,
  ]);
};

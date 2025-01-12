import { Post as PostType } from "@/domains/posts/repository/getPosts/types";
type Props = {
  post: PostType;
};

export const Post = ({ post }: Props) => {
  return <div className="text-gray-600 font-bold text-lg">{post.title}</div>;
};

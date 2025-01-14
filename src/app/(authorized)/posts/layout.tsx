import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "A description of my application",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen w-full h-full  ">
      <div className="text-2xl font-bold text-gray-500 pb-4">投稿管理</div>
      {children}
    </div>
  );
}

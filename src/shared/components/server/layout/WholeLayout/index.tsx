type Props = {
  children: React.ReactNode;
};

export const WholeLayout = ({ children }: Props) => {
  return <div className={`bg-off-white h-full w-full  p-4`}>{children}</div>;
};

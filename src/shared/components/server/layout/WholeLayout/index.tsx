type Props = {
  children: React.ReactNode;
};

export const WholeLayout = ({ children }: Props) => {
  return (
    <div className={`bg-off-white flex flex-col min-h-screen w-full  p-4`}>
      {children}
    </div>
  );
};

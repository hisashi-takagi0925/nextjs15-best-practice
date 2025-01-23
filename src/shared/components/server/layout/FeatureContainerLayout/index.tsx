type Props = {
  title: string;
  children: React.ReactNode;
};

export const FeatureContainerLayout = ({ title, children }: Props) => {
  return (
    <div>
      <div className="text-xl font-bold text-gray-500 bg-gray-100 p-4  rounded-lg">
        {title}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

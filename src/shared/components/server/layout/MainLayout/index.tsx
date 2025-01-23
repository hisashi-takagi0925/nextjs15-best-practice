type Props = {
  title: string;
  content?: React.ReactNode;
  cancelButton?: React.ReactNode;
  submitButton?: React.ReactNode;
};

export const FeatureContainerLayout = ({
  title,
  content,
  cancelButton,
  submitButton,
}: Props) => {
  return (
    <div>
      <div className="text-xl font-bold text-gray-500 bg-gray-100 p-4  rounded-lg">
        {title}
      </div>
      <div className="p-4">{content}</div>
      <div className="flex justify-center p-4 items-center gap-4">
        {cancelButton}
        {submitButton}
      </div>
    </div>
  );
};

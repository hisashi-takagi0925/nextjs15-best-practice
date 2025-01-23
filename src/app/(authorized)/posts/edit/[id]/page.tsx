import { PageContent } from "./_components/PageContent/index.client";
import { generateFormValue } from "./_actions/server/generateFormValue";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditPost({ params }: Props) {
  const defaultValues = await generateFormValue({ params });

  return <PageContent data={defaultValues} />;
}

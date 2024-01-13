import { ReactNode } from "react";
import { ExampleLayout } from "../../components/ExampleLayout";
import { Example } from "../../types/common";
import { getExampleDetail } from "../../utils/example";
import { getExamples } from "../../utils/file";

export default async function Layout({ children }: { children: ReactNode }) {
  const exampleNames = await getExamples();

  const examples: Example[] = exampleNames.map((example) => getExampleDetail(example));

  return <ExampleLayout examples={examples}>{children}</ExampleLayout>;
}

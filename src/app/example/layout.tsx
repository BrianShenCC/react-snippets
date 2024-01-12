import { ReactNode } from "react";
import { ExampleLayout } from "../../components/ExampleLayout";
import { ShowCase } from "../../components/ShowCase";
import { CodeDetail, Example } from "../../types/common";
import { getExampleDetail } from "../../utils/example";
import { appPath, getCodeByPath, getExamples } from "../../utils/file";

import { headers } from "next/headers";

export default async function Layout({ children }: { children: ReactNode }) {
  const exampleNames = await getExamples();

  const examples: Example[] = exampleNames.map((example) => getExampleDetail(example));
  const headersList = headers();

  const pathname = headersList.get("x-pathname") || "";

  const exampleDir = `${appPath}${pathname}`;
  const exampleCodePath = `${exampleDir}/page.tsx`;
  const componentCodePath = `${exampleDir}/index.tsx`;
  const componentStylePath = `${exampleDir}/index.css`;
  const exampleCode = await getCodeByPath(exampleCodePath);
  const componentCode = await getCodeByPath(componentCodePath);
  const styleCode = await getCodeByPath(componentStylePath);
  const codes: CodeDetail[] = [{ code: exampleCode, path: exampleCodePath }];

  if (componentCode) {
    codes.push({ code: componentCode, path: componentCodePath });
  }
  if (styleCode) {
    codes.push({ code: styleCode, path: componentStylePath });
  }
  const exampleName = pathname.replace(/^\/example\//, "");
  const exampleDetail = getExampleDetail(exampleName);

  return (
    <ExampleLayout examples={examples}>
      <ShowCase name={exampleName} codes={codes} title={exampleDetail?.name}>
        {children}
      </ShowCase>
    </ExampleLayout>
  );
}

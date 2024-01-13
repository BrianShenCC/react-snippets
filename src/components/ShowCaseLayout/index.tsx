import { ReactNode } from "react";
import { ShowCase } from "../../components/ShowCase";
import { CodeDetail } from "../../types/common";
import { getExampleDetail } from "../../utils/example";
import { appPath, getCodeByPath } from "../../utils/file";

import { headers } from "next/headers";

export default async function ShowCaseLayout({ children }: { children: ReactNode }) {
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
    <ShowCase name={exampleName} codes={codes} title={exampleDetail?.name}>
      {children}
    </ShowCase>
  );
}

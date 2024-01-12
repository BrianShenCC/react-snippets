"use client";
import { FC, ReactNode } from "react";
import { CodeDetail } from "../../types/common";
import { Collapse, CollapseProps } from "antd";

import Editor from "@monaco-editor/react";
import { CodeEditor } from "../CodeEditor";

type ShowCaseProps = {
  title?: string;
  children: ReactNode;
  codes: CodeDetail[];
};

export const ShowCase: FC<ShowCaseProps> = ({ title, children, codes }) => {
  const items: CollapseProps["items"] = codes.map((codeDetail) => ({
    key: codeDetail.path,
    label: codeDetail.path,
    children: <CodeEditor {...codeDetail}></CodeEditor>,
  }));

  return (
    <div className="example px-5 py-5 w-full">
      <div className="border border-gray-3 dark:border-gray-600 rounded shadow-md">
        {title && (
          <div>
            <h2 className="text-base p-2">{title}</h2>
            <div className="border-b border-gray-300 dark:border-gray-600" />
          </div>
        )}

        <div className="example-showcase overflow-y-auto p-6 max-h-[100vh_-_160px]">{children}</div>
        <div className="border-b border-gray-300 dark:border-gray-600" />
        <div className="example-option h-8 p-4 flex justify-end items-center gap-4">
          {/* <i i-mdi-reload icon-btn @click="reload()" />
                <!-- <i i-carbon-chemistry icon-btn /> -->
                <i i-ri-github-line icon-btn @click="goEditPage()" />
                <i v-if="!copied" i-carbon-copy icon-btn @click="copyCode()" />
                <i v-if="copied" i-carbon-checkbox-checked icon-btn />
                <i i-carbon-code icon-btn @click="toggleSourceVisible()" /> */}
        </div>
        <Collapse items={items} />

        <code></code>
        {/* <SourceCode v-show="sourceVisible" :source="source" :source-path="sourcePath" /> */}

        <div
          className="bg-white dark:bg-black sticky left-0 right-0 bottom-0 z-10"
          //   v-show="sourceVisible"
          //   @click="toggleSourceVisible(false)"
        >
          <div className="border-t border-gray-300 dark:border-gray-600" />
          <div className="inline-flex justify-center items-center icon-btn text-sm my-2 w-full">
            {/* <HiddenSourceSvg /> */}
            <span>隐藏源代码</span>
          </div>
        </div>
      </div>
    </div>
  );
};

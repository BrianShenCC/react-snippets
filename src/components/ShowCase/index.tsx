"use client";
import { Collapse, CollapseProps } from "antd";
import { FC, ReactNode, useRef, useState } from "react";
import { CodeDetail } from "../../types/common";

import { CodeEditor } from "../CodeEditor";

import packageJson from "../../../package.json";
import { GithubOutlined } from "@ant-design/icons";

type ShowCaseProps = {
  name: string;
  title?: string;
  children: ReactNode;
  codes: CodeDetail[];
};

export const ShowCase: FC<ShowCaseProps> = ({ name, title, children, codes }) => {
  const [activeKey, setActiveKey] = useState<string>();
  const items: CollapseProps["items"] = codes.map((codeDetail) => {
    const absolutePath = codeDetail.path?.replace(/^\.\//, "");
    return {
      key: codeDetail.path,
      label: (
        <div className="flex">
          <div className="flex-1 w-0 truncate">{absolutePath}</div>
          <div className="px-1">
            <GithubOutlined
              onClick={(e) => {
                e.stopPropagation();
                goto(absolutePath);
              }}
            />
          </div>
        </div>
      ),
      children: <CodeEditor {...codeDetail}></CodeEditor>,
    };
  });

  const goto = (absolutePath: string) => {
    window.open(`${packageJson.repository.url}/tree/main/${absolutePath}`);
  };

  return (
    <div className="example px-5 py-5 w-full text-center">
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
          {/* <i className="i-ri-github-line icon-btn" /> */}
          {/* <i v-if="!copied" i-carbon-copy icon-btn @click="copyCode()" />
                <i v-if="copied" i-carbon-checkbox-checked icon-btn />
                <i i-carbon-code icon-btn @click="toggleSourceVisible()" /> */}
        </div>
        <Collapse items={items} activeKey={activeKey} onChange={(e) => setActiveKey(e as string)} />
      </div>
    </div>
  );
};

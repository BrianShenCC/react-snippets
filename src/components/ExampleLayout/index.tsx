"use client";
import { FC, ReactNode, useState } from "react";
import { CollapseButton } from "../../components/CollapseButton";
import { Sidebar } from "../../components/Sidebar";
import { Example } from "../../types/common";

type ExampleLayoutProps = {
  children: ReactNode;
  examples: Example[];
};

export const ExampleLayout: FC<ExampleLayoutProps> = ({ examples, children }) => {
  const [isHiddenSidebar, setIsHiddenSidebar] = useState(false);
  return (
    <div className="flex h-lvh relative">
      <Sidebar isHiddenSidebar={isHiddenSidebar} examples={examples}></Sidebar>

      <main className="relative flex-auto p-5 w-0">
        <CollapseButton
          isHiddenSidebar={isHiddenSidebar}
          toggleHiddenSidebar={() => setIsHiddenSidebar((d) => !d)}
        ></CollapseButton>
        <div className="overflow-auto">{children}</div>
      </main>
    </div>
  );
};

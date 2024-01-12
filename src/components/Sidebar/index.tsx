"use client";
import classNames from "classnames";
import Link from "next/link";
import { FC } from "react";
import { Example } from "../../types/common";
import { usePathname } from "next/navigation";

type SidebarProps = {
  isHiddenSidebar: boolean;
  examples: Example[];
};

export const Sidebar: FC<SidebarProps> = ({ isHiddenSidebar, examples = [] }) => {
  const pathname = usePathname();
  return (
    <aside
      className={classNames(
        "w-[200px] max-h-screen flex-shrink-0 transition-width duration-660",
        isHiddenSidebar && "!w-0"
      )}
    >
      <ul
        className={classNames(
          "flex flex-col py-1 h-screen overflow-y-scroll",
          isHiddenSidebar && "!overflow-hidden opacity"
        )}
      >
        {examples.map(({ name, path }) => (
          <Link key={path} href={path}>
            <li
              title={name}
              className="m-0.5 ml-1 block px-2 py-2 rounded-2 text-center font-semibold truncate bg-gray-100 dark:bg-gray-800 opacity-90 transition-all duration-200 ease-in-out"
              style={{
                color: pathname === path ? "#48b0f1" : undefined,
              }}
            >
              {name}
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
};

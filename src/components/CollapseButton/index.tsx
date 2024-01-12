"use client";
import classNames from "classnames";
import { FC } from "react";
import "./index.css";

type CollapseButtonProps = {
  className?: string;
  isHiddenSidebar: boolean;
  toggleHiddenSidebar: () => void;
};

export const CollapseButton: FC<CollapseButtonProps> = ({ className, isHiddenSidebar, toggleHiddenSidebar }) => {
  return (
    <div
      className={classNames("close-handler", isHiddenSidebar && "close", className)}
      role="button"
      onClick={() => toggleHiddenSidebar()}
    />
  );
};

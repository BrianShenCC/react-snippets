"use client";

import classNames from "classnames";
import { FC, ReactNode } from "react";
import "./index.css";

type GradientBorderButtonProps = {
  children: ReactNode;
  className?: string;
};

export const GradientBorderButton: FC<GradientBorderButtonProps> = ({ children }) => {
  return (
    <div
      className={classNames(
        "gradient-border-button font-sans font-500 block sm:text-xl py-3 px-6 text-center cursor-pointer",
        classNames
      )}
    >
      {children}
    </div>
  );
};

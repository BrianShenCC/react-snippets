import { FC } from "react";
import "./index.css";

export const GradientBorderButton: FC<any> = ({ children }) => {
  return (
    <div className="gradient-border font-sans font-500 block sm:text-xl py-3 px-6 text-center cursor-pointer">
      {children}
    </div>
  );
};

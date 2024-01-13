"use client";

import classNames from "classnames";
import { FC } from "react";
import "./index.css";

function randomNum(min: number, max: number) {
  return (Math.random() * (max - min + 1) + min).toFixed(2);
}
function randomColor() {
  return `rgb(${randomNum(0, 255)}, ${randomNum(0, 255)}, ${randomNum(0, 255)})`;
}

type SurroundProps = {
  className: string;
  tags: string[];
};

export const Surround: FC<SurroundProps> = ({ className, tags }) => {
  return (
    <div className={classNames("surrounding", className)}>
      {tags.map((tag) => {
        return (
          <div
            className="box"
            key={tag}
            style={{
              "--margin-top": `${randomNum(-40, 40)}vh`,
              "--margin-left": `${randomNum(5, 30)}vw`,
              "--animation-duration": `${randomNum(6, 30)}s`,
              "--animation-delay": `${randomNum(-20, 0)}s`,
            }}
          >
            <div className="tag" style={{ color: randomColor() }}>
              {tag}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// <div class="demo">

//   </div>
//   <div mt-4>
//     相关网站 <a href="https://github.com/cong-min/TagCloud" target="_blank" text-cyan>TagCloud</a>
//   </div>

"use client";

import { useEffect, useRef } from "react";
import "./index.css";
import Icon from "@ant-design/icons";
import PlaneSvg from "./plane.svg";
console.log(PlaneSvg);

export default function Plane() {
  const planeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const plane = planeRef.current;
    if (!plane) {
      return () => {};
    }

    let deg = 0;
    let ex = 0;
    let ey = 0;
    let vx = 0;
    let vy = 0;
    let count = 0;
    const bindEffect = (e: MouseEvent) => {
      ex = e.x - plane.offsetLeft - plane.clientWidth / 2;
      ey = e.y - plane.offsetTop - plane.clientHeight / 2;
      deg = (360 * Math.atan(ey / ex)) / (2 * Math.PI) + 90;
      if (ex < 0) deg += 180;

      count = 0;
    };

    let timer = requestAnimationFrame(draw);
    function draw() {
      plane!.style.transform = `rotate(${deg}deg)`;
      if (count < 100) {
        vx += ex / 100;
        vy += ey / 100;
      }
      plane!.style.left = `${vx}px`;
      plane!.style.top = `${vy}px`;
      count++;
      timer = requestAnimationFrame(draw);
    }

    window.addEventListener("mousemove", bindEffect);
    return () => {
      window.removeEventListener("mousemove", bindEffect);
      cancelAnimationFrame(timer);
    };
  }, []);

  return (
    <>
      <div id="plane" className="plane" ref={planeRef}>
        <Icon component={PlaneSvg} />
      </div>

      <div>Move the mouse casually to see the effect</div>
    </>
  );
}

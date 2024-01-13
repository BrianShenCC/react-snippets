import Link from "next/link";
import "./index.css";
import { Button } from "antd";

export default function ClayPotteryStyle() {
  return (
    <>
      <div className="p-4 flex justify-center items-center gap-8 bg-[#7ca0e6]">
        <div className="clay-box" />
        <div className="clay-box" />
        <div className="clay-box" />
      </div>
      <div className="mt-4">
        <Link href="https://codeadrian.github.io/clay.css/" target="_blank" text-cyan>
          <Button type="link" size="large">
            clay.css
          </Button>
        </Link>
      </div>
    </>
  );
}

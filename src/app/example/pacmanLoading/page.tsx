import Link from "next/link";
import "./index.css";
import { Button } from "antd";

export default function PacmanLoading() {
  return (
    <>
      <div className="pacman-loading-container">
        <div className="pacman-loading">
          <div className="pacman-shape pacman-shape-4">
            <div className="pacman-shape-4-top" />
            <div className="pacman-shape-4-bottom" />
            <div className="pacman-shape-4-eye" />
          </div>
          <div className="pacman-shape pacman-shape-1" />
          <div className="pacman-shape pacman-shape-2" />
          <div className="pacman-shape pacman-shape-3" />
        </div>
      </div>
      <div className="mt-6">
        <h3>Find More Loading Effect</h3>
        <p className="mt-3">
          <Link href="https://loading.io/" target="_blank" text-cyan>
            <Button size="large" type="link">
              loading.io
            </Button>
          </Link>
        </p>
        <p className="mt-1">
          <a
            href="http://k21vin.gitee.io/front-end-data-visualization/#/native/pureCSS/loading"
            target="_blank"
            text-cyan
          >
            <Button size="large" type="link">
              PureCSS Loading Effect
            </Button>
          </a>
        </p>
      </div>
    </>
  );
}

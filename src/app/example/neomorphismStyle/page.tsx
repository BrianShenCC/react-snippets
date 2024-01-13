import { PauseCircleOutlined, PoweroffOutlined } from "@ant-design/icons";
import "./index.css";

export default function NeomorphismStyle() {
  return (
    <div className="p-4 flex justify-center items-center gap-8 bg-[#ececec]">
      <div className="input-box">
        <input className="input-check" type="checkbox" />
        <PoweroffOutlined className="icon text-3xl" />
      </div>
      <div className="logo-box">
        <PauseCircleOutlined className="icon text-3xl" />
      </div>
    </div>
  );
}

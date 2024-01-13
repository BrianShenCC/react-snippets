import "./index.css";

export default function ClipPath() {
  return (
    <ul id="clip-path-example" className="flex flex-wrap gap-8">
      <li className="card">
        <div className="rectangle" />
      </li>
      <li className="card">
        <div className="circle" />
      </li>
      <li className="card">
        <div className="triangle" />
      </li>
      <li className="card">
        <div className="trapezoid" />
      </li>
      <li className="card">
        <div className="sector" />
      </li>
      <li className="card">
        <div className="ellipse" />
      </li>
      <li className="card">
        <div className="pentaqon" />
      </li>
      <li className="card">
        <div className="hexagon" />
      </li>
      <li className="card">
        <div className="star" />
      </li>
    </ul>
  );
}

import "../styling/Indicator.css";

export default function Indicator() {
  return (
    <div className="indicator">
      <span className="indicator-item bus">
        <i className="indicator-dot" />
        Bus
      </span>
      <span className="indicator-item stop">
        <i className="indicator-dot" />
        Stop
      </span>
      <span className="indicator-item you">
        <i className="indicator-dot" />
        You
      </span>
    </div>
  );
}
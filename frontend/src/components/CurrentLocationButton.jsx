import { LocateFixed } from "lucide-react";
import "../styling/Icons.css";

export default function CurrentLocationButton() {
  return (
    <button
      type="button"
      className="locate-btn"
      aria-label="Use my current location"
      title="Use my current location"
    >
      <LocateFixed size={22} />
    </button>
  );
}
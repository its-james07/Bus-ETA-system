import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  AttributionControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const KATHMANDU = [27.73977, 85.335745];
const KEY = import.meta.env.VITE_MAPTILER_KEY;

export default function KathmanduMap() {
  return (
    <MapContainer
      center={KATHMANDU}
      zoom={13}
      attributionControl={false}
      style={{ height: "100vh", width: "100%" }}
    >
      <AttributionControl prefix={false} position="bottomright" />
      <TileLayer
        attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> &copy; OpenStreetMap contributors'
        url={`https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${KEY}`}
        maxZoom={19}
      />
      <Marker position={KATHMANDU}>
        <Popup>Kathmandu</Popup>
      </Marker>
    </MapContainer>
  );
}
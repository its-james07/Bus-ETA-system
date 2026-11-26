import '../styling/Sidebar.css'
import StopCards from './StopCards'
import RouteList from './RouteList.jsx'
export default function Sidebar() {
    return (
        <>
        <aside className="sidebar">
        <p className="sb-eyebrow">RIVERTON · LIVE TRANSIT</p>
        <h1 className="sb-title">Good morning.</h1>
        <p className="sb-sub">Your next bus is closer than you think.</p>

        <div className="sb-location">
          <strong>You’re near Central Station</strong>
          Downtown · Location is on
        </div>

        <div className="sb-head">
          <h2>Nearby stops</h2>
          <span>Within 800 m</span>
        </div>

        {/* <StopCards/> */}
        {/* <RouteList/> */}

        <button className="sb-button">Explore all routes →</button>
        <p className="sb-note">Live arrivals refresh every 5 seconds</p>
      </aside>
        </>
    )
}
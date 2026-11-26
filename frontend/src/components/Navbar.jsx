import '../styling/Navbar.css'
export default function Navbar() {
  return (
    <>
      {/* <style>{css}</style> */}
      <nav className="nav">
        <div className="nav-brand">
          <div className="nav-logo">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="3" width="16" height="15" rx="3" />
              <path d="M4 11h16M8 21v-3M16 21v-3" />
              <circle cx="8" cy="14.5" r="0.5" />
              <circle cx="16" cy="14.5" r="0.5" />
            </svg>
          </div>
          <span>Bus ETA</span>
        </div>

        <div className="nav-links">
          <a href="#" className="active">Explore</a>
          <a href="#">Routes</a>
          <a href="#">Saved stops</a>
        </div>

        <div className="nav-status">
          <span>Sorakhutte</span>
          <span className="nav-pill">
            <span className="nav-dot" />
            Live
          </span>
        </div>
      </nav>
    </>
  );
}
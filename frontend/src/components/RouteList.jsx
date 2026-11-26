import "../styling/RouteList.css";

const ROUTES = [
  { id: "01", from: "Payutar", to: "RNAC(Ratnapark)", stops: 12, frequency: "5–8 min", active: true },
  { id: "12", from: "Lolang", to: "RNAC(Ratnapark)", stops: 18, frequency: "10 min" }
  // { id: "07", from: "Balaju", to: "Satdobato", stops: 16, frequency: "8 min" },
  // { id: "05", from: "Kirtipur", to: "New Road", stops: 14, frequency: "12 min" },
];

export default function RouteList() {
  return (
    <section className="route-list">
      <p className="route-list__summary">{ROUTES.length} routes · Live service</p>
      <ul className="route-list__items">
        {ROUTES.map((r) => (
          <li key={r.id}>
            <button
              type="button"
              className={`route-card${r.active ? " route-card--active" : ""}`}
            >
              <span className="route-card__badge">{r.id}</span>
              <span className="route-card__info">
                <span className="route-card__name">
                  {r.from} → {r.to}
                </span>
                <span className="route-card__meta">
                  {r.stops} stops · Every {r.frequency}
                </span>
              </span>
              <svg className="route-card__chevron" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 3l11 9-11 9" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default function StopCards(){
    return(
          <ul className="sb-stops">
          <li className="sb-card">
            <span className="sb-name">Machapokhari</span>
            <span className="sb-dist">120 m</span>
            <span className="sb-routes">24 · 16 · 08<span className="sb-next">Next bus in 3 min</span></span>
            <span className="sb-mins">3</span>
          </li>
          <li className="sb-card">
            <span className="sb-name">Balaju</span>
            <span className="sb-dist">350 m</span>
            <span className="sb-routes">24 · 32<span className="sb-next">Next bus in 7 min</span></span>
            <span className="sb-mins">7</span>
          </li>
          <li className="sb-card">
            <span className="sb-name">Sorakhutte</span>
            <span className="sb-dist">640 m</span>
            <span className="sb-routes">16 · 08<span className="sb-next">Next bus in 11 min</span></span>
            <span className="sb-mins">11</span>
          </li>
        </ul>
    )
}
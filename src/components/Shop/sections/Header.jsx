import { Link } from "react-router-dom";

export default function Header({ onCatalogClick, onCareClick }) {
  return (
    <header className="topbar">
      <nav>
        <button className="nav-btn" onClick={onCatalogClick}>
          каталог
        </button>
        <button className="nav-btn" onClick={onCareClick}>
          уход
        </button>
        <Link to="/delivery" className="nav-btn">
          доставка
        </Link>
      </nav>
    </header>
  );
}

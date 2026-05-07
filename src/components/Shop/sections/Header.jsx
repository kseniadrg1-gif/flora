import { Link } from "react-router-dom";

export default function Header({ onCatalogClick, onCareClick }) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 100px",
      }}
    >
      <span>LovLive</span>

      <div style={{ display: "flex", gap: "40px" }}>
        <button className="nav-btn" onClick={onCatalogClick}>
          каталог
        </button>
        <button className="nav-btn" onClick={onCareClick}>
          уход
        </button>
        <Link to="/delivery" className="nav-btn">
          доставка
        </Link>
      </div>

      <img
        src="/icon/profile-icon.png"
        alt="Личный кабинет"
        style={{ width: "24px", height: "24px", cursor: "pointer" }}
      />
    </header>
  );
}

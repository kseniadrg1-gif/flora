import { Link } from "react-router-dom";

export default function Header({ onCatalogClick, onCareClick }) {
  // Получаем количество товаров в корзине
  const getCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <header
      className="cap"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 100px",
      }}
    >
      <span>LovLive</span>

      <div style={{ display: "flex", gap: "22px", alignItems: "center" }}>
        <button className="nav-btn" onClick={onCatalogClick}>
          каталог
        </button>
        <button className="nav-btn" onClick={onCareClick}>
          уход
        </button>
        <Link to="/delivery" className="nav-btn">
          доставка
        </Link>
        <Link to="/cart" className="nav-btn" style={{ position: "relative" }}>
          🛒
          <span className="cart-badge">{getCartCount()}</span>
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

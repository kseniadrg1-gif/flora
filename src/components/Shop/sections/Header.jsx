import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header({ onCatalogClick, onCareClick }) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const count = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(count);
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);

    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

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

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
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
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </div>

      <Link to="/profile">
        <img
          src="/icon/profile-icon.png"
          alt="Личный кабинет"
          style={{ width: "24px", height: "24px", cursor: "pointer" }}
        />
      </Link>
    </header>
  );
}

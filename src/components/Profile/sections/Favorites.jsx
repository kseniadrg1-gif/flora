import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = () => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  };

  const removeFromFavorites = (id) => {
    const updated = favorites.filter((item) => item.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.find((cartItem) => cartItem.id === item.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.img,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} добавлен в корзину`);
  };

  if (favorites.length === 0) {
    return (
      <div className="profile-tab favorites-tab">
        <h2>Избранное</h2>
        <p className="empty-favorites-text">У вас пока нет избранных товаров</p>
        <button
          className="btn-primary"
          onClick={() => navigate("/", { state: { scrollTo: "leafy" } })}
        >
          Перейти к покупкам
        </button>
      </div>
    );
  }

  return (
    <div className="profile-tab favorites-tab">
      <h2>Избранное</h2>
      <p className="favorites-subtitle">Товары, которые вам понравились</p>

      <div className="favorites-grid">
        {favorites.map((item) => (
          <div key={item.id} className="favorite-card">
            <button
              className="favorite-remove"
              onClick={() => removeFromFavorites(item.id)}
            >
              ✕
            </button>
            <img src={item.img} alt={item.name} className="favorite-img" />
            <div className="favorite-info">
              <h3>{item.name}</h3>
              <p className="favorite-price">{item.price}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(item)}
              >
                В корзину
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

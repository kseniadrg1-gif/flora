import React, { useState, useEffect } from "react";
import "./ProductModal.css";

export default function ProductModal({ product, onClose }) {
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setIsInCart(cart.some((item) => item.id === product?.id));
  }, [product]);

  // В момент добавления в корзину, убедитесь, что product имеет уникальный id
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const productId = product.uniqueId || product.id || product.name;

    if (isInCart) {
      const newCart = cart.filter((item) => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(newCart));
      setIsInCart(false);
    } else {
      const newItem = {
        id: productId,
        name: product.name,
        price: product.price,
        img: product.img,
        quantity: 1,
      };
      cart.push(newItem);
      localStorage.setItem("cart", JSON.stringify(cart));
      setIsInCart(true);
    }
  };

  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="modal-content">
          <div className="modal-image">
            <img src={product.img} alt={product.name} />
          </div>

          <div className="modal-info">
            <h2>{product.name}</h2>
            <div className="modal-price">{product.price}</div>

            <div className="modal-section">
              <h3>Уход за растением</h3>
              <ul>
                <li>
                  Полив: {product.watering || "Умеренный, 1 раз в неделю"}
                </li>
                <li>Свет: {product.light || "Яркий рассеянный свет"}</li>
                <li>Температура: {product.temp || "18-25°C"}</li>
                <li>
                  Подкормка: {product.feeding || "Весной и летом 1 раз в месяц"}
                </li>
              </ul>
            </div>

            <div className="modal-section">
              <h3>Описание</h3>
              <p>
                {product.description ||
                  "Красивое и неприхотливое растение, которое станет украшением любого интерьера."}
              </p>
            </div>

            <button
              className={`modal-buy ${isInCart ? "in-cart" : ""}`}
              onClick={addToCart}
            >
              {isInCart ? "✓ В корзине" : "Добавить в корзину"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

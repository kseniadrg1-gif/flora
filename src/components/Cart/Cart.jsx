import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item,
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.setItem("cart", "[]");
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ""));
      return total + price * item.quantity;
    }, 0);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Корзина пуста");
      return;
    }
    alert(`Заказ оформлен! Сумма: ${getTotalPrice()}₽\nСкоро с вами свяжутся.`);
    clearCart();
    navigate("/");
  };

  return (
    <div className="cart-page">
      <button className="cart-back-btn" onClick={() => navigate("/")}>
        ← На главную
      </button>

      <div className="cart-container">
        <h1>Корзина</h1>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Ваша корзина пуста</p>
            <button className="btn-primary" onClick={() => navigate("/")}>
              Перейти к покупкам
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="cart-item-img"
                  />
                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p className="cart-item-price">{item.price}</p>
                  </div>
                  <div className="cart-item-quantity">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-item-total">
                    {parseInt(item.price.replace(/[^0-9]/g, "")) *
                      item.quantity}
                    ₽
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => removeItem(item.id)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="cart-total">
                <span>Итого:</span>
                <span>{getTotalPrice()}₽</span>
              </div>
              <button className="btn-primary" onClick={handleCheckout}>
                Оформить заказ
              </button>
              <button className="btn-secondary" onClick={clearCart}>
                Очистить корзину
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

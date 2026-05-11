import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  const navigate = useNavigate();

  // Данные пользователя
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // История заказов
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Загружаем данные пользователя из localStorage
    const savedUser = localStorage.getItem("userProfile");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    // Загружаем историю заказов
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(user));
    alert("Данные сохранены!");
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-page">
      <button className="profile-back" onClick={() => navigate("/")}>
        ← На главную
      </button>

      <div className="profile-container">
        <h1>Личный кабинет</h1>

        {/* Данные пользователя */}
        <div className="profile-section">
          <h2>Мои данные</h2>
          <div className="profile-form">
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={user.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              value={user.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
            />
            <button className="btn-primary" onClick={handleSave}>
              Сохранить
            </button>
          </div>
        </div>

        {/* История заказов */}
        <div className="profile-section">
          <h2>Мои заказы</h2>
          {orders.length === 0 ? (
            <p className="profile-empty">У вас пока нет заказов</p>
          ) : (
            <div className="profile-orders">
              {orders.map((order, idx) => (
                <div key={idx} className="profile-order">
                  <div className="order-header">
                    <span>Заказ #{idx + 1}</span>
                    <span>{order.date}</span>
                    <span className="order-total">{order.total}₽</span>
                  </div>
                  <div className="order-items">
                    {order.items.map((item, i) => (
                      <div key={i} className="order-item">
                        <span>{item.name}</span>
                        <span>x{item.quantity}</span>
                        <span>{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");

  // Сохранённые данные
  const [savedUser, setSavedUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Временные данные (для полей ввода)
  const [tempUser, setTempUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [savedSubscriptions, setSavedSubscriptions] = useState({
    email: false,
    telegram: false,
  });
  const [tempSubscriptions, setTempSubscriptions] = useState({
    email: false,
    telegram: false,
  });

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("userProfile");
    if (saved) {
      const parsed = JSON.parse(saved);
      setSavedUser(parsed);
      setTempUser(parsed);
      if (parsed.subscriptions) {
        setSavedSubscriptions(parsed.subscriptions);
        setTempSubscriptions(parsed.subscriptions);
      }
    }

    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) setOrders(JSON.parse(savedOrders));
  }, []);

  const handleChange = (e) => {
    setTempUser({ ...tempUser, [e.target.name]: e.target.value });
  };

  const handleSubscriptionChange = (type) => {
    setTempSubscriptions((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleSave = () => {
    setSavedUser(tempUser);
    setSavedSubscriptions(tempSubscriptions);
    localStorage.setItem(
      "userProfile",
      JSON.stringify({ ...tempUser, subscriptions: tempSubscriptions }),
    );
    alert("Данные сохранены!");
  };

  const handleCancel = () => {
    setTempUser(savedUser);
    setTempSubscriptions(savedSubscriptions);
    navigate("/");
  };

  const handleLogout = () => {
    if (window.confirm("Выйти?")) {
      localStorage.removeItem("userProfile");
      navigate("/");
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <h1>LovLive</h1>
          <button className="logout-btn" onClick={handleLogout}>
            Выйти
          </button>
        </div>

        <div className="profile-content">
          {/* Боковое меню — показывает сохранённые данные */}
          <aside className="profile-sidebar">
            <div className="user-info">
              <div className="user-name">
                {savedUser.firstName || savedUser.lastName
                  ? `${savedUser.firstName} ${savedUser.lastName}`.trim()
                  : "Гость"}
              </div>
              <div className="user-email">
                {savedUser.email || "email@example.com"}
              </div>
            </div>

            <nav className="sidebar-nav">
              {[
                "profile",
                "addresses",
                "payment",
                "notifications",
                "security",
                "orders",
              ].map((tab) => (
                <button
                  key={tab}
                  className={`sidebar-link ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "profile" && "Личные данные"}
                  {tab === "addresses" && "Адреса доставки"}
                  {tab === "payment" && "Способы оплаты"}
                  {tab === "notifications" && "Уведомления"}
                  {tab === "security" && "Безопасность"}
                  {tab === "orders" && "Мои заказы"}
                </button>
              ))}
            </nav>
          </aside>

          <main className="profile-main">
            {activeTab === "profile" && (
              <div className="profile-tab">
                <h2>Личные данные</h2>

                <div className="form-row">
                  <div className="form-group">
                    <label>ИМЯ</label>
                    <input
                      type="text"
                      name="firstName"
                      value={tempUser.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>ФАМИЛИЯ</label>
                    <input
                      type="text"
                      name="lastName"
                      value={tempUser.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={tempUser.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>ТЕЛЕФОН</label>
                  <input
                    type="tel"
                    name="phone"
                    value={tempUser.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="subscriptions">
                  <h3>Подписки</h3>
                  <div className="toggle-item">
                    <div className="toggle-info">
                      <strong>Email рассылка</strong>
                      <small>Новости, акции и советы по уходу</small>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={tempSubscriptions.email}
                        onChange={() => handleSubscriptionChange("email")}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  <div className="toggle-item">
                    <div className="toggle-info">
                      <strong>Telegram bot</strong>
                      <small>Уведомления о поливе и статусах заказа</small>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={tempSubscriptions.telegram}
                        onChange={() => handleSubscriptionChange("telegram")}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>

                <div className="form-actions">
                  <button className="btn-cancel" onClick={handleCancel}>
                    Отмена
                  </button>
                  <button className="btn-save" onClick={handleSave}>
                    Сохранить изменения
                  </button>
                </div>
              </div>
            )}

            {activeTab !== "profile" && activeTab !== "orders" && (
              <div className="profile-tab">
                <h2>
                  {activeTab === "addresses"
                    ? "Адреса доставки"
                    : activeTab === "payment"
                      ? "Способы оплаты"
                      : activeTab === "notifications"
                        ? "Уведомления"
                        : "Безопасность"}
                </h2>
                <div className="coming-soon">
                  <p>Скоро появится</p>
                </div>
              </div>
            )}

            {activeTab === "orders" && (
              <div className="profile-tab">
                <h2>Мои заказы</h2>
                {orders.length === 0 ? (
                  <div className="coming-soon">
                    <p>У вас пока нет заказов</p>
                  </div>
                ) : (
                  <div className="orders-list">
                    {orders.map((order, idx) => (
                      <div key={idx} className="order-card">
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
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

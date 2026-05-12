import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PersonalData from "./sections/PersonalData";
import Addresses from "./sections/Addresses";
import Payment from "./sections/Payment";
import Notifications from "./sections/Notifications";
import Security from "./sections/Security";
import Orders from "./sections/Orders";
import "./Profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [savedUser, setSavedUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Функция для обновления данных пользователя
  const refreshUserData = () => {
    const saved = localStorage.getItem("userProfile");
    if (saved) {
      setSavedUser(JSON.parse(saved));
    }
  };

  useEffect(() => {
    refreshUserData();

    // Слушаем событие обновления данных
    window.addEventListener("userDataUpdated", refreshUserData);
    return () => window.removeEventListener("userDataUpdated", refreshUserData);
  }, []);

  const handleLogout = () => {
    if (window.confirm("Выйти?")) {
      localStorage.removeItem("userProfile");
      navigate("/");
    }
  };

  const tabs = [
    { id: "profile", name: "Личные данные" },
    { id: "addresses", name: "Адреса доставки" },
    { id: "payment", name: "Способы оплаты" },
    { id: "notifications", name: "Уведомления" },
    { id: "security", name: "Безопасность" },
    { id: "orders", name: "Мои заказы" },
  ];

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => navigate("/")}>
              ←
            </button>
            <h1>LovLive</h1>
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            Выйти
          </button>
        </div>

        <div className="profile-content">
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
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`sidebar-link ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </aside>

          <main className="profile-main">
            {activeTab === "profile" && (
              <PersonalData onSave={refreshUserData} />
            )}
            {activeTab === "addresses" && <Addresses />}
            {activeTab === "payment" && <Payment />}
            {activeTab === "notifications" && <Notifications />}
            {activeTab === "security" && <Security />}
            {activeTab === "orders" && <Orders />}
          </main>
        </div>
      </div>
    </div>
  );
}

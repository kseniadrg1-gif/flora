import React, { useState, useEffect } from "react";

export default function Notifications() {
  const [settings, setSettings] = useState({
    orderStatus: true,
    promotions: false,
    plantCare: true,
    restock: false,
    email: true,
    push: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem("notificationSettings");
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  const handleToggle = (key) => {
    const updated = { ...settings, [key]: !settings[key] };
    setSettings(updated);
    localStorage.setItem("notificationSettings", JSON.stringify(updated));
  };

  return (
    <div className="profile-tab">
      <h2>Уведомления</h2>
      <p className="settings-subtitle">
        Настройте, какие уведомления вы хотите получать
      </p>

      <div className="notifications-settings">
        <div className="setting-group">
          <h3>Заказы</h3>
          <div className="toggle-item">
            <div className="toggle-info">
              <strong>Статус заказа</strong>
              <small>Уведомления об изменении статуса заказа</small>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.orderStatus}
                onChange={() => handleToggle("orderStatus")}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>

        <div className="setting-group">
          <h3>Акции и новости</h3>
          <div className="toggle-item">
            <div className="toggle-info">
              <strong>Распродажи и акции</strong>
              <small>Специальные предложения и скидки</small>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.promotions}
                onChange={() => handleToggle("promotions")}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
          <div className="toggle-item">
            <div className="toggle-info">
              <strong>Новинки растений</strong>
              <small>О поступлении новых растений</small>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.restock}
                onChange={() => handleToggle("restock")}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>

        <div className="setting-group">
          <h3>Уход за растениями</h3>
          <div className="toggle-item">
            <div className="toggle-info">
              <strong>Напоминания о поливе</strong>
              <small>Советы по уходу и напоминания</small>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.plantCare}
                onChange={() => handleToggle("plantCare")}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>

        <div className="setting-group">
          <h3>Способы получения</h3>
          <div className="toggle-item">
            <div className="toggle-info">
              <strong>Email рассылка</strong>
              <small>Получать на почту</small>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.email}
                onChange={() => handleToggle("email")}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
          <div className="toggle-item">
            <div className="toggle-info">
              <strong>Push-уведомления</strong>
              <small>Уведомления в браузере</small>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.push}
                onChange={() => handleToggle("push")}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";

export default function PersonalData({ onSave }) {
  const [savedUser, setSavedUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
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

  const loadData = () => {
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
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleChange = (e) => {
    setTempUser({ ...tempUser, [e.target.name]: e.target.value });
  };

  const handleSubscriptionChange = (type) => {
    setTempSubscriptions((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleSave = () => {
    const userToSave = { ...tempUser, subscriptions: tempSubscriptions };
    localStorage.setItem("userProfile", JSON.stringify(userToSave));
    setSavedUser(tempUser);
    setSavedSubscriptions(tempSubscriptions);

    // Оповещаем Profile о обновлении
    if (onSave) onSave();

    alert("Данные сохранены!");
  };

  const handleCancel = () => {
    setTempUser(savedUser);
    setTempSubscriptions(savedSubscriptions);
  };

  return (
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
            placeholder="Анна"
          />
        </div>
        <div className="form-group">
          <label>ФАМИЛИЯ</label>
          <input
            type="text"
            name="lastName"
            value={tempUser.lastName}
            onChange={handleChange}
            placeholder="Иванова"
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
          placeholder="anna@mail.ru"
        />
      </div>

      <div className="form-group">
        <label>ТЕЛЕФОН</label>
        <input
          type="tel"
          name="phone"
          value={tempUser.phone}
          onChange={handleChange}
          placeholder="+7 (999) 123-45-67"
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
  );
}

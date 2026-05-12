import React, { useState } from "react";

export default function Security() {
  const [changePassword, setChangePassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handlePasswordChange = () => {
    if (!passwordData.current || !passwordData.new || !passwordData.confirm) {
      alert("Заполните все поля");
      return;
    }
    if (passwordData.new !== passwordData.confirm) {
      alert("Новые пароли не совпадают");
      return;
    }
    if (passwordData.new.length < 6) {
      alert("Пароль должен быть не менее 6 символов");
      return;
    }
    alert("Пароль успешно изменён!");
    setPasswordData({ current: "", new: "", confirm: "" });
    setChangePassword(false);
  };

  return (
    <div className="profile-tab">
      <h2>Безопасность</h2>

      <div className="security-section">
        <h3>Пароль</h3>
        <p>••••••••</p>
        <button
          className="security-btn"
          onClick={() => setChangePassword(!changePassword)}
        >
          Изменить пароль
        </button>

        {changePassword && (
          <div className="password-form">
            <input
              type="password"
              placeholder="Текущий пароль"
              value={passwordData.current}
              onChange={(e) =>
                setPasswordData({ ...passwordData, current: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Новый пароль"
              value={passwordData.new}
              onChange={(e) =>
                setPasswordData({ ...passwordData, new: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Подтвердите новый пароль"
              value={passwordData.confirm}
              onChange={(e) =>
                setPasswordData({ ...passwordData, confirm: e.target.value })
              }
            />
            <div className="form-actions">
              <button
                className="btn-cancel"
                onClick={() => setChangePassword(false)}
              >
                Отмена
              </button>
              <button className="btn-save" onClick={handlePasswordChange}>
                Сохранить
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="security-section">
        <h3>Двухфакторная аутентификация</h3>
        <p>Дополнительный уровень защиты вашего аккаунта</p>
        <button className="security-btn">Включить</button>
      </div>

      <div className="security-section">
        <h3>Активные сессии</h3>
        <div className="session-item">
          <div>
            <strong>Текущее устройство</strong>
            <div>Chrome · Windows · Текущий город</div>
          </div>
          <span className="current-badge">Текущий</span>
        </div>
        <button className="security-btn secondary">Завершить все сессии</button>
      </div>
    </div>
  );
}

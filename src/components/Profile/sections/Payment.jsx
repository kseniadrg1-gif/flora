import React, { useState, useEffect } from "react";

export default function Payment() {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newMethod, setNewMethod] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("paymentMethods");
    if (saved) {
      setPaymentMethods(JSON.parse(saved));
    }
  }, []);

  const saveMethods = (methods) => {
    setPaymentMethods(methods);
    localStorage.setItem("paymentMethods", JSON.stringify(methods));
  };

  const handleAddCard = () => {
    if (!newMethod.cardNumber || !newMethod.cardName || !newMethod.expiry) {
      alert("Заполните все поля");
      return;
    }
    const last4 = newMethod.cardNumber.slice(-4);
    const newCard = {
      id: Date.now(),
      last4: last4,
      cardName: newMethod.cardName,
      expiry: newMethod.expiry,
      isDefault: paymentMethods.length === 0,
    };
    saveMethods([...paymentMethods, newCard]);
    setNewMethod({ cardNumber: "", cardName: "", expiry: "" });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    const updated = paymentMethods.filter((m) => m.id !== id);
    saveMethods(updated);
  };

  const setDefault = (id) => {
    const updated = paymentMethods.map((m) => ({
      ...m,
      isDefault: m.id === id,
    }));
    saveMethods(updated);
  };

  return (
    <div className="profile-tab">
      <h2>Способы оплаты</h2>

      <button className="add-btn" onClick={() => setShowForm(!showForm)}>
        + Добавить карту
      </button>

      {showForm && (
        <div className="payment-form">
          <input
            type="text"
            placeholder="Имя на карте"
            value={newMethod.cardName}
            onChange={(e) =>
              setNewMethod({ ...newMethod, cardName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Номер карты (16 цифр)"
            maxLength="19"
            value={newMethod.cardNumber}
            onChange={(e) => {
              let value = e.target.value.replace(/\D/g, "");
              value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
              setNewMethod({ ...newMethod, cardNumber: value });
            }}
          />
          <input
            type="text"
            placeholder="MM/YY"
            maxLength="5"
            value={newMethod.expiry}
            onChange={(e) =>
              setNewMethod({ ...newMethod, expiry: e.target.value })
            }
          />
          <div className="form-actions">
            <button className="btn-cancel" onClick={() => setShowForm(false)}>
              Отмена
            </button>
            <button className="btn-save" onClick={handleAddCard}>
              Добавить
            </button>
          </div>
        </div>
      )}

      {paymentMethods.length === 0 ? (
        <p className="empty-text">У вас пока нет добавленных карт</p>
      ) : (
        <div className="payment-list">
          {paymentMethods.map((card) => (
            <div key={card.id} className="payment-card">
              {card.isDefault && (
                <span className="default-badge">По умолчанию</span>
              )}
              <div className="card-icon">💳</div>
              <div className="card-info">
                <p className="card-number">•••• {card.last4}</p>
                <p className="card-name">{card.cardName}</p>
                <p className="card-expiry">Срок: {card.expiry}</p>
              </div>
              <div className="payment-actions">
                {!card.isDefault && (
                  <button
                    className="set-default-btn"
                    onClick={() => setDefault(card.id)}
                  >
                    Сделать основной
                  </button>
                )}
                <button
                  className="delete-payment-btn"
                  onClick={() => handleDelete(card.id)}
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="other-payments">
        <h3>Другие способы оплаты</h3>
        <div className="payment-option">
          <span>💵 Наличные при получении</span>
        </div>
        <div className="payment-option">
          <span>📱 SBP (Система быстрых платежей)</span>
        </div>
      </div>
    </div>
  );
}

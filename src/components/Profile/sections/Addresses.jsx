import React, { useState, useEffect } from "react";

export default function Addresses() {
  const [addresses, setAddresses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    street: "",
    city: "",
    apartment: "",
    isDefault: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem("addresses");
    if (saved) {
      setAddresses(JSON.parse(saved));
    }
  }, []);

  const saveAddresses = (updatedAddresses) => {
    setAddresses(updatedAddresses);
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
  };

  const handleAddAddress = () => {
    if (!newAddress.street || !newAddress.city) {
      alert("Заполните улицу и город");
      return;
    }
    const newAddr = {
      id: Date.now(),
      ...newAddress,
    };
    const updated = [...addresses, newAddr];
    saveAddresses(updated);
    setNewAddress({ street: "", city: "", apartment: "", isDefault: false });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    const updated = addresses.filter((addr) => addr.id !== id);
    saveAddresses(updated);
  };

  const setDefault = (id) => {
    const updated = addresses.map((addr) => ({
      ...addr,
      isDefault: addr.id === id,
    }));
    saveAddresses(updated);
  };

  return (
    <div className="profile-tab">
      <h2>Адреса доставки</h2>

      <button className="add-btn" onClick={() => setShowForm(!showForm)}>
        + Добавить новый адрес
      </button>

      {showForm && (
        <div className="address-form">
          <input
            type="text"
            placeholder="Город"
            value={newAddress.city}
            onChange={(e) =>
              setNewAddress({ ...newAddress, city: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Улица"
            value={newAddress.street}
            onChange={(e) =>
              setNewAddress({ ...newAddress, street: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Квартира/офис (опционально)"
            value={newAddress.apartment}
            onChange={(e) =>
              setNewAddress({ ...newAddress, apartment: e.target.value })
            }
          />
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={newAddress.isDefault}
              onChange={(e) =>
                setNewAddress({ ...newAddress, isDefault: e.target.checked })
              }
            />
            Сделать адресом по умолчанию
          </label>
          <div className="form-actions">
            <button className="btn-cancel" onClick={() => setShowForm(false)}>
              Отмена
            </button>
            <button className="btn-save" onClick={handleAddAddress}>
              Сохранить
            </button>
          </div>
        </div>
      )}

      {addresses.length === 0 ? (
        <p className="empty-text">У вас пока нет сохранённых адресов</p>
      ) : (
        <div className="addresses-list">
          {addresses.map((addr) => (
            <div key={addr.id} className="address-card">
              {addr.isDefault && (
                <span className="default-badge">По умолчанию</span>
              )}
              <p>
                <strong>{addr.city}</strong>, {addr.street}
              </p>
              {addr.apartment && <p>Кв/офис: {addr.apartment}</p>}
              <div className="address-actions">
                {!addr.isDefault && (
                  <button
                    className="set-default-btn"
                    onClick={() => setDefault(addr.id)}
                  >
                    Сделать основным
                  </button>
                )}
                <button
                  className="delete-address-btn"
                  onClick={() => handleDelete(addr.id)}
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

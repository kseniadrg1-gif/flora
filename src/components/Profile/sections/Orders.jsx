import React, { useState, useEffect } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "pending":
        return "В обработке";
      case "shipped":
        return "В пути";
      case "delivered":
        return "Доставлен";
      case "cancelled":
        return "Отменён";
      default:
        return "Новый";
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "pending":
        return "status-pending";
      case "shipped":
        return "status-shipped";
      case "delivered":
        return "status-delivered";
      case "cancelled":
        return "status-cancelled";
      default:
        return "";
    }
  };

  const cancelOrder = (index) => {
    if (window.confirm("Вы уверены, что хотите отменить этот заказ?")) {
      const updatedOrders = [...orders];
      updatedOrders[index].status = "cancelled";
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
      setOrders(updatedOrders);
      alert("Заказ отменён");
    }
  };

  const deleteOrder = (index) => {
    if (window.confirm("Удалить этот заказ из истории?")) {
      const updatedOrders = orders.filter((_, i) => i !== index);
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
      setOrders(updatedOrders);
      alert("Заказ удалён");
    }
  };

  const filteredOrders = orders.filter((order) => {
    if (activeFilter === "all") return true;
    return order.status === activeFilter;
  });

  return (
    <div className="profile-tab orders-tab">
      <div className="orders-header">
        <h2>История заказов</h2>
        <p className="orders-subtitle">
          Управляйте своими покупками и отслеживайте доставку новых растений.
        </p>
      </div>

      <div className="orders-filters">
        <button
          className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          Все заказы
        </button>
        <button
          className={`filter-btn ${activeFilter === "pending" ? "active" : ""}`}
          onClick={() => setActiveFilter("pending")}
        >
          В обработке
        </button>
        <button
          className={`filter-btn ${activeFilter === "shipped" ? "active" : ""}`}
          onClick={() => setActiveFilter("shipped")}
        >
          В пути
        </button>
        <button
          className={`filter-btn ${activeFilter === "delivered" ? "active" : ""}`}
          onClick={() => setActiveFilter("delivered")}
        >
          Доставлен
        </button>
        <button
          className={`filter-btn ${activeFilter === "cancelled" ? "active" : ""}`}
          onClick={() => setActiveFilter("cancelled")}
        >
          Отменённые
        </button>
      </div>

      {orders.length === 0 ? (
        <p className="empty-orders-text">У вас пока нет заказов</p>
      ) : filteredOrders.length === 0 ? (
        <p className="empty-orders-text">Нет заказов в этой категории</p>
      ) : (
        <div className="orders-list">
          {filteredOrders.map((order, idx) => {
            const originalIndex = orders.findIndex((o, i) => o === order);
            return (
              <div key={idx} className="order-card">
                <div className="order-card-header">
                  <div className="order-number">
                    <span className="order-label">ЗАКАЗ №</span>
                    <span className="order-value">
                      PH-{String(99000 + originalIndex).slice(-5)}
                    </span>
                  </div>
                  <div className="order-date">
                    <span className="order-label">ДАТА</span>
                    <span className="order-value">{order.date}</span>
                  </div>
                  <div className="order-amount">
                    <span className="order-label">СУММА</span>
                    <span className="order-value">{order.total} ₽</span>
                  </div>
                  <div
                    className={`order-status ${getStatusClass(order.status)}`}
                  >
                    {getStatusText(order.status)}
                  </div>
                </div>

                <div className="order-items-list">
                  {order.items.map((item, i) => (
                    <div key={i} className="order-item-row">
                      <div className="order-item-info">
                        <span className="item-name">{item.name}</span>
                        {item.size && (
                          <span className="item-meta">{item.size}</span>
                        )}
                        {item.pot && (
                          <span className="item-meta">· Кашпо: {item.pot}</span>
                        )}
                      </div>
                      <div className="order-item-quantity">
                        x{item.quantity}
                      </div>
                      <div className="order-item-price">{item.price}</div>
                    </div>
                  ))}
                </div>

                {order.address && (
                  <div className="order-delivery-info">
                    <span className="delivery-label">
                      Доставлено по адресу:
                    </span>
                    <span className="delivery-address">{order.address}</span>
                  </div>
                )}

                <div className="order-card-footer">
                  <button className="order-btn invoice-btn">Чек</button>
                  {order.status === "pending" && (
                    <button
                      className="order-btn cancel-btn"
                      onClick={() => cancelOrder(originalIndex)}
                    >
                      Отменить заказ
                    </button>
                  )}
                  {order.status === "cancelled" && (
                    <button
                      className="order-btn delete-btn"
                      onClick={() => deleteOrder(originalIndex)}
                    >
                      Удалить заказ
                    </button>
                  )}
                  <button className="order-btn repeat-btn">
                    Повторить заказ
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

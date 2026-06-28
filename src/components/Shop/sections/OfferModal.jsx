// src/components/Shop/sections/OfferModal.jsx

import React from "react";

export default function OfferModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="modal-header">
          <h2>Публичная оферта</h2>
          <p className="modal-subtitle">ст. 435, 437 ГК РФ</p>
        </div>

        <div className="modal-body">
          <div className="info-block">
            <div className="block-icon">📄</div>
            <div className="block-content">
              <h4>Общие положения</h4>
              <p>
                Публичная оферта — договор купли-продажи дистанционным способом
              </p>
            </div>
          </div>

          <div className="info-block">
            <div className="block-icon">🪴</div>
            <div className="block-content">
              <h4>Товар</h4>
              <p>Комнатные растения и товары для ухода из каталога</p>
            </div>
          </div>

          <div className="info-block">
            <div className="block-icon">🛒</div>
            <div className="block-content">
              <h4>Оформление заказа</h4>
              <p>Через корзину на сайте. Подтверждение приходит на email</p>
            </div>
          </div>

          <div className="info-block">
            <div className="block-icon">💳</div>
            <div className="block-content">
              <h4>Оплата и доставка</h4>
              <p>
                Онлайн оплата или наличные при получении. Доставка по адресу
              </p>
            </div>
          </div>

          <div className="info-block">
            <div className="block-icon">↩️</div>
            <div className="block-content">
              <h4>Возврат (ст. 26.1 ЗоЗПП)</h4>
              <ul>
                <li>7 дней — возврат товара надлежащего качества</li>
                <li>При сохранении товарного вида и упаковки</li>
              </ul>
            </div>
          </div>

          <div className="info-block">
            <div className="block-icon">🏢</div>
            <div className="block-content">
              <h4>Реквизиты</h4>
              <p>ИНН: 1234567890 · ОГРНИП: 123456789012345</p>
            </div>
          </div>

          <div className="modal-footer-info">
            <p>© 2026 LovLive · Все права защищены</p>
          </div>
        </div>
      </div>
    </div>
  );
}

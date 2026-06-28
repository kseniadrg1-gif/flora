// src/components/Shop/sections/PrivacyModal.jsx

import React from "react";

export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="modal-header">
          <h2>Политика конфиденциальности</h2>
          <p className="modal-subtitle">152-ФЗ «О персональных данных»</p>
        </div>

        <div className="modal-body">
          <div className="info-block">
            <div className="block-icon">📋</div>
            <div className="block-content">
              <h4>Что мы собираем</h4>
              <p>Имя, телефон, email, адрес доставки, данные о заказах</p>
            </div>
          </div>

          <div className="info-block">
            <div className="block-icon">🎯</div>
            <div className="block-content">
              <h4>Цели обработки</h4>
              <p>
                Оформление и доставка заказов, обратная связь, улучшение сервиса
              </p>
            </div>
          </div>

          <div className="info-block">
            <div className="block-icon">⚖️</div>
            <div className="block-content">
              <h4>Ваши права (ст. 14 152-ФЗ)</h4>
              <ul>
                <li>Получить информацию о своих данных</li>
                <li>Уточнить или удалить данные</li>
                <li>Отозвать согласие в любой момент</li>
              </ul>
            </div>
          </div>

          <div className="info-block">
            <div className="block-icon">🔒</div>
            <div className="block-content">
              <h4>Безопасность</h4>
              <p>Данные передаются только службам доставки. Хранятся 5 лет.</p>
            </div>
          </div>

          <div className="info-block">
            <div className="block-icon">📧</div>
            <div className="block-content">
              <h4>Контакты для запросов</h4>
              <p>
                <strong>flora@gmail.com</strong> · +7-927-018-33-30
              </p>
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

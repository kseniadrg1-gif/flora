import React from "react";

export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        <h2>Политика конфиденциальности</h2>
        <h3>1. Какие данные мы собираем</h3>
        <p>Имя, номер телефона, адрес доставки.</p>
        <h3>2. Для чего</h3>
        <p>Для оформления и доставки заказа, связи с вами.</p>
        <h3>3. Передача данных</h3>
        <p>Данные передаются только транспортной компании для доставки.</p>
        <h3>4. Ваши права</h3>
        <p>Вы можете запросить удаление ваших данных в любой момент.</p>
        <h3>5. Контакты</h3>
        <p>flora@gmail.com | +7-927-018-33-30</p>
      </div>
    </div>
  );
}

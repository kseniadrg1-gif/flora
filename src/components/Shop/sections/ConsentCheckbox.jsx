// src/components/Shop/sections/ConsentCheckbox.jsx

import React, { useState } from "react";

export default function ConsentCheckbox({ onChange, required = true }) {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    if (onChange) onChange(isChecked);
  };

  const openPrivacyModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Находим кнопку в футере и кликаем по ней
    const privacyBtn = document.querySelector('[data-modal="privacy"]');
    if (privacyBtn) {
      privacyBtn.click();
    } else {
      // Если кнопки нет, создаем событие
      window.dispatchEvent(new CustomEvent("openPrivacyModal"));
    }
  };

  const openOfferModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Находим кнопку в футере и кликаем по ней
    const offerBtn = document.querySelector('[data-modal="offer"]');
    if (offerBtn) {
      offerBtn.click();
    } else {
      window.dispatchEvent(new CustomEvent("openOfferModal"));
    }
  };

  return (
    <div className="consent-checkbox">
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          required={required}
        />
        <span className="consent-text">
          Я принимаю условия
          <button
            type="button"
            className="consent-link"
            onClick={openOfferModal}
          >
            публичной оферты
          </button>
          и даю согласие на обработку моих персональных данных в соответствии с
          <button
            type="button"
            className="consent-link"
            onClick={openPrivacyModal}
          >
            политикой конфиденциальности
          </button>
        </span>
      </label>
    </div>
  );
}

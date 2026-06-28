// src/components/Shop/sections/Footer.jsx

import { useState, useEffect } from "react";
import PrivacyModal from "./PrivacyModal";
import OfferModal from "./OfferModal";

export default function Footer() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);

  // Слушаем события из ConsentCheckbox
  useEffect(() => {
    const openPrivacy = () => setIsPrivacyModalOpen(true);
    const openOffer = () => setIsOfferModalOpen(true);

    window.addEventListener("openPrivacyModal", openPrivacy);
    window.addEventListener("openOfferModal", openOffer);

    return () => {
      window.removeEventListener("openPrivacyModal", openPrivacy);
      window.removeEventListener("openOfferModal", openOffer);
    };
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-col">
            <h3>LovLive</h3>
            <p>+7-927-018-33-30</p>
            <p>flora@gmail.com</p>
          </div>

          <div className="footer-col">
            <h4>Юридическая информация</h4>
            <ul>
              <li>
                <button
                  className="footer-link"
                  data-modal="privacy"
                  onClick={() => setIsPrivacyModalOpen(true)}
                >
                  Политика конфиденциальности
                </button>
              </li>
              <li>
                <button
                  className="footer-link"
                  data-modal="offer"
                  onClick={() => setIsOfferModalOpen(true)}
                >
                  Публичная оферта
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>О нас</h4>
            <ul>
              <li>
                <button
                  className="footer-link"
                  onClick={() => (window.location.href = "/info")}
                >
                  О магазине
                </button>
              </li>
              <li>
                <button
                  className="footer-link"
                  onClick={() => (window.location.href = "/delivery")}
                >
                  Доставка
                </button>
              </li>
              <li>Возврат товара</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Контакты</h4>
            <ul>
              <li>Общие контакты для предложений</li>
              <li>flora@gmail.com</li>
              <li>+7-927-018-33-30</li>
            </ul>
          </div>
        </div>

        <div className="footer-cookies">
          <p>
            Используя сайт, вы соглашаетесь с обработкой персональных данных в
            соответствии с 152-ФЗ «О персональных данных».
          </p>
          <p
            style={{
              marginTop: "8px",
              fontSize: "11px",
              color: "rgba(229,222,202,0.4)",
            }}
          >
            © 2026 LovLive. Все права защищены.
          </p>
        </div>
      </footer>

      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
      <OfferModal
        isOpen={isOfferModalOpen}
        onClose={() => setIsOfferModalOpen(false)}
      />
    </>
  );
}

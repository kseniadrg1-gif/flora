import { useState } from "react";
import PrivacyModal from "./PrivacyModal";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-col">
            <h3>LovLive</h3>
            <p>89270833550</p>
            <p>телефон call-центра</p>
          </div>

          <div className="footer-col">
            <h4>о нас</h4>
            <ul>
              <li>
                <button
                  className="footer-link"
                  onClick={() => setIsModalOpen(true)}
                >
                  политика обработки персональных данных
                </button>
              </li>
              <li>документы сайта</li>
              <li>самовывоз</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>клиентам</h4>
            <ul>
              <li>вопросы-ответы</li>
              <li>
                <button
                  className="footer-link"
                  onClick={() => (window.location.href = "/delivery")}
                >
                  доставка
                </button>
              </li>
              <li>возврат товара</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>контакты</h4>
            <ul>
              <li>общие контакты для предложений по ассортименту</li>
            </ul>
          </div>
        </div>

        <div className="footer-cookies">
          <p>
            Мы используем cookies. Используя сайт, вы соглашаетесь с обработкой
            данных с целью сбора аналитики. Cookies можно отключить в любой
            момент в настройках вашего браузера.
          </p>
        </div>
      </footer>
      <PrivacyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

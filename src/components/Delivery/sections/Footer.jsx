import React from "react";

export default function Footer() {
  return (
    <footer className="footer-delivery">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>LovLive</h3>
            <p>Политика конфиденциальности</p>
            <p>Публичная оферта</p>
            <p>© 2026 Все права защищены</p>
          </div>
          <div>
            <h4>Контакты</h4>
            <p>+7-927-018-33-30</p>
            <p>flora@gmail.com</p>
          </div>
          <div>
            <h4>Другие способы связи</h4>
            <div className="social-icons">
              <a href="mailto:flora@gmail.com" aria-label="Email">
                <img src="/icon/mail.png" alt="Email" width="28" height="28" />
              </a>
              <a
                href="https://t.me/flora_shop"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
              >
                <img
                  src="/icon/telegram.png"
                  alt="Telegram"
                  width="28"
                  height="28"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

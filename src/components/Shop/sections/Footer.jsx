import { Link } from "react-router-dom";

export default function Footer() {
  return (
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
            <li>политика обработки персональных данных</li>
            <li>документы сайта</li>
            <li>самовывоз</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>клиентам</h4>
          <ul>
            <li>вопросы-ответы</li>
            <li>
              <Link to="/delivery" className="footer-link">
                доставка
              </Link>
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
          данных с целью сбора аналитики. Cookies можно отключить в любой момент
          в настройках вашего браузера.
        </p>
      </div>
    </footer>
  );
}

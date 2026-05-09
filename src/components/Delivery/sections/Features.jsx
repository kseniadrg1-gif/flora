import React from "react";

export default function Features() {
  return (
    <section className="features-delivery">
      <div className="container grid-3">
        <div>
          <img
            src="/icon/package.png"
            alt="Упаковка"
            className="feature-icon"
          />
          <p>Специальная упаковка — растение не повредится в пути</p>
        </div>
        <div>
          <img
            src="/icon/shipping.png"
            alt="Доставка"
            className="feature-icon"
          />
          <p>Доставка курьером до двери</p>
        </div>
        <div>
          <img
            src="/icon/sending.png"
            alt="Отправка"
            className="feature-icon"
          />
          <p>Отправляем в день заказа</p>
        </div>
      </div>
    </section>
  );
}

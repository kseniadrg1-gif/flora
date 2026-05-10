import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[а-яА-ЯёЁa-zA-Z\s\-]*$/.test(value)) {
      setFormData({ ...formData, name: value });
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^[\d\+\-\s\(\)]*$/.test(value)) {
      setFormData({ ...formData, phone: value });
    }
  };

  const handleSubmit = (e) => {
    setTimeout(() => {
      alert("Спасибо! Мы свяжемся с вами.");
      setFormData({ name: "", phone: "" });
    }, 100);
  };

  return (
    <section id="delivery-form" className="form-delivery">
      <div className="container">
        <h2>Подберём удобный способ доставки</h2>
        <p>Оставьте телефон — согласуем детали и ответим на вопросы.</p>
        <form
          action="https://formsubmit.co/kseniadrg1@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="Новая заявка с сайта Flora!"
          />

          <input
            type="text"
            name="name"
            placeholder="Как к вам обращаться?"
            value={formData.name}
            onChange={handleNameChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Номер телефона"
            value={formData.phone}
            onChange={handlePhoneChange}
            required
          />
          <button type="submit" className="btn-primary">
            Связаться
          </button>
        </form>
      </div>
    </section>
  );
}

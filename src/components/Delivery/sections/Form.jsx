import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const TELEGRAM_BOT_TOKEN = "8796350807:AAH8qK9gz8vR3avpBHFqm3-uWBPiK3vpCrU";
  const TELEGRAM_CHAT_ID = "8796350807";

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

  const sendToTelegram = async (name, phone) => {
    const message = `🪴 *НОВАЯ ЗАЯВКА С САЙТА!*\n\n👤 *Имя:* ${name}\n📞 *Телефон:* ${phone}`;
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
      await axios.post(url, {
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      });
      return true;
    } catch (error) {
      console.error("Ошибка отправки в Telegram:", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const tgSuccess = await sendToTelegram(formData.name, formData.phone);

    if (tgSuccess) {
      alert("Заявка отправлена! Модераторы свяжутся с вами в ближайшее время.");
    } else {
      alert("Произошла ошибка, попробуйте позже или напишите нам в Telegram.");
    }

    setFormData({ name: "", phone: "" });
    setIsLoading(false);
  }; // ← ЭТА СКОБКА БЫЛА ПРОПУЩЕНА!

  return (
    <section id="delivery-form" className="form-delivery">
      <div className="container">
        <h2>Подберём удобный способ доставки</h2>
        <p>Оставьте телефон — согласуем детали и ответим на вопросы.</p>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="Новая заявка с сайта Flora!"
          />

          <input
            type="text"
            name="name"
            placeholder="Как к вам обращаться? (только буквы)"
            value={formData.name}
            onChange={handleNameChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Номер телефона (только цифры)"
            value={formData.phone}
            onChange={handlePhoneChange}
            required
          />
          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? "Отправка..." : "Связаться"}
          </button>
        </form>
      </div>
    </section>
  );
}

import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Спасибо! Мы свяжемся с вами для уточнения деталей доставки.");
    setFormData({ name: "", phone: "" });
  };

  return (
    <section id="delivery-form" className="form-delivery">
      <div className="container">
        <h2>Подберём удобный способ доставки</h2>
        <p>Оставьте телефон — согласуем детали и ответим на вопросы.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Как к вам обращаться?"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Номер телефона"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
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

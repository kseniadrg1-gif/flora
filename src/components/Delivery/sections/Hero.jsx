import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const handleSelectPlant = () => {
    navigate("/", { state: { scrollTo: "leafy" } });
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("delivery-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-delivery">
      <div className="top-left">
        <button className="logo-btn" onClick={() => navigate("/")}>
          LovLive
        </button>
      </div>

      <div className="top-right">
        <button className="nav-link" onClick={() => navigate("/info")}>
          О нас
        </button>
        <button className="nav-link" onClick={scrollToForm}>
          Оставить заявку
        </button>
        <a href="tel:+79270183330" className="phone-link">
          +7-927-018-33-30
        </a>
      </div>

      <div className="hero-content">
        <h1>Доставка растений по всей России</h1>
        <p>
          Бережная упаковка и быстрая доставка ваших зелёных питомцев в любую
          точку страны.
        </p>
        <button className="btn-primary" onClick={handleSelectPlant}>
          Выбрать растение
        </button>
      </div>
    </section>
  );
}

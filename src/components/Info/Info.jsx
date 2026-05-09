import React from "react";
import { useNavigate } from "react-router-dom";
import "./Info.css";

export default function Info() {
  const navigate = useNavigate();

  return (
    <div className="info-page">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← На главную
      </button>
      <div className="info-container">
        <h1>О нас</h1>
        <div className="info-text">
          <p>Меня зовут Елизавета, я основательница LovLive.</p>
          <p>
            Я живу в Самаре и с детства обожаю растения. В какой-то момент
            поняла, что хочу делиться этой любовью с другими. Так появился
            LovLive — магазин, где каждый найдёт растение по душе.
          </p>
          <p>
            Мы отбираем только здоровые и крепкие растения, бережно упаковываем
            и отправляем по всей России. Я лично проверяю каждый заказ перед
            отправкой.
          </p>
          <p>
            LovLive — это не просто магазин, это место, где растения дарят
            радость и уют каждый день.
          </p>
          <p className="signature">🌿 С любовью к растениям, Елизавета</p>
        </div>
      </div>
    </div>
  );
}

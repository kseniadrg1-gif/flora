export default function Hero({ onSelectPlant }) {
  return (
    <section className="hero">
      <h1>
        <span>F</span>
        <span>l</span>
        <span>o</span>
        <span>r</span>
        <span>a</span>
      </h1>
      <button className="select-plant-btn" onClick={onSelectPlant}>
        Выбрать растение
      </button>

      <div className="hero-bottom">
        <div className="hero-text">
          Добавьте свежести и энергии вашему пространству с помощью наших
          зеленых друзей. Пусть каждый лист станет символом заботы и любви к
          природе
        </div>

        <div className="categories">
          <button className="cat-btn">Лиственное</button>
          <button className="cat-btn">Суккуленты</button>
          <button className="cat-btn">Деревья</button>
        </div>
      </div>
    </section>
  );
}

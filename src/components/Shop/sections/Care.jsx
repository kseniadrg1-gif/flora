import React, { useState } from "react";

const careProducts = [
  {
    name: "Кокосовый субстрат",
    price: "200₽",
    img: "/care/кокосовый субстрат.webp",
  },
  { name: "Насадка рассеиватель", price: "200₽", img: "/care/насадка.webp" },
  { name: "Компост", price: "5000₽", img: "/care/компост.webp" },
  { name: "Сульфат калия", price: "5000₽", img: "/care/сульфат калия.webp" },
];

const Care = React.forwardRef((props, ref) => {
  const [liked, setLiked] = useState({});

  const toggleLike = (index) => {
    setLiked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section ref={ref} className="care">
      <h2>СРЕДСТВА ДЛЯ УХОДА</h2>
      <p>
        Полное руководство по уходу для каждого растения описанно в
        карточке{" "}
      </p>
      <div className="care-grid">
        {careProducts.map((product, index) => (
          <div key={index}>
            <div className="care-card">
              <img
                src={liked[index] ? "/icon/red-heart.png" : "/icon/Heart.png"}
                alt="favorite"
                className="care-fav"
                onClick={() => toggleLike(index)}
              />
              <img
                src={product.img}
                alt={product.name}
                className="care-product-img"
              />
            </div>
            <p className="price__care">
              {product.name} <br /> {product.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Care;

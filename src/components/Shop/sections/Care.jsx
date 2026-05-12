import React, { useState } from "react";

const careProducts = [
  {
    id: "care-0",
    name: "Кокосовый субстрат",
    price: "200₽",
    img: "/care/кокосовый субстрат.webp",
  },
  {
    id: "care-1",
    name: "Насадка рассеиватель",
    price: "200₽",
    img: "/care/насадка.webp",
  },
  {
    id: "care-2",
    name: "Компост",
    price: "5000₽",
    img: "/care/компост.webp",
  },
  {
    id: "care-3",
    name: "Сульфат калия",
    price: "5000₽",
    img: "/care/сульфат калия.webp",
  },
];

const Care = React.forwardRef((props, ref) => {
  const [liked, setLiked] = useState({});

  React.useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const likedState = {};
    careProducts.forEach((product, idx) => {
      likedState[idx] = favorites.some((item) => item.id === product.id);
    });
    setLiked(likedState);
  }, []);

  const toggleLike = (index, e, product) => {
    e.stopPropagation();

    const newLiked = { ...liked, [index]: !liked[index] };
    setLiked(newLiked);

    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (!newLiked[index]) {
      const updated = favorites.filter((item) => item.id !== product.id);
      localStorage.setItem("favorites", JSON.stringify(updated));
    } else {
      if (!favorites.some((item) => item.id === product.id)) {
        favorites.push({
          id: product.id,
          name: product.name,
          price: product.price,
          img: product.img,
        });
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
    }
  };

  return (
    <section ref={ref} className="care">
      <h2>СРЕДСТВА ДЛЯ УХОДА</h2>
      <p>Полное руководство по уходу для каждого растения описано в карточке</p>
      <div className="care-grid">
        {careProducts.map((product, index) => (
          <div key={index} className="care-item">
            <div className="care-card">
              <div
                className="care-fav"
                onClick={(e) => toggleLike(index, e, product)}
                style={{
                  marginRight: "50px",
                }}
              >
                {liked[index] ? "❤️" : "🤍"}
              </div>
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

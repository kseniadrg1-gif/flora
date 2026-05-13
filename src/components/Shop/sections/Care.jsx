import React, { useState } from "react";
import ProductModal from "./ProductModal";

const careProducts = [
  {
    id: "care-0",
    name: "Кокосовый субстрат",
    price: "200₽",
    img: "/care/кокосовый субстрат.webp",
    description:
      "Натуральный кокосовый субстрат улучшает структуру почвы, обеспечивает корни растений кислородом и удерживает влагу.",
    watering: "Использовать при пересадке, смешивая с землей",
    light: "Хранить в сухом месте",
    temp: "Комнатная температура",
    feeding: "Не требуется",
  },
  {
    id: "care-1",
    name: "Насадка рассеиватель",
    price: "200₽",
    img: "/care/насадка.webp",
    description:
      "Насадка-рассеиватель для лейки обеспечивает мягкий и равномерный полив, не размывая почву.",
    watering: "Использовать при каждом поливе",
    light: "Не требуется",
    temp: "Любая",
    feeding: "Не требуется",
  },
  {
    id: "care-2",
    name: "Компост",
    price: "5000₽",
    img: "/care/компост.webp",
    description:
      "Органическое удобрение из натуральных компонентов. Обогащает почву полезными микроэлементами.",
    watering: "Вносить весной и летом",
    light: "Хранить в темном месте",
    temp: "5-25°C",
    feeding: "1 раз в сезон",
  },
  {
    id: "care-3",
    name: "Сульфат калия",
    price: "5000₽",
    img: "/care/сульфат калия.webp",
    description:
      "Калийное удобрение для укрепления корневой системы и повышения иммунитета растений.",
    watering: "Растворить в воде из расчета 10г на 10л",
    light: "Хранить в сухом месте",
    temp: "10-25°C",
    feeding: "1 раз в 2 недели",
  },
];

const Care = React.forwardRef((props, ref) => {
  const [liked, setLiked] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const openModal = (product) => {
    setSelectedProduct({
      ...product,
      id: product.id,
      uniqueId: product.id,
    });
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <section ref={ref} className="care">
        <h2>СРЕДСТВА ДЛЯ УХОДА</h2>
        <p>
          Полное руководство по уходу для каждого растения описано в карточке
        </p>
        <div className="care-grid">
          {careProducts.map((product, index) => (
            <div
              key={index}
              className="care-item"
              onClick={() => openModal(product)}
              style={{ cursor: "pointer" }}
            >
              <div className="care-card">
                <div
                  className="care-fav"
                  onClick={(e) => toggleLike(index, e, product)}
                  style={{
                    right: "35px",
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

      <ProductModal product={selectedProduct} onClose={closeModal} />
    </>
  );
});

export default Care;

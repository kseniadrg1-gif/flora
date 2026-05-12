import React, { useState } from "react";
import ProductModal from "./ProductModal";

const Products = React.forwardRef(({ id, title, description, plants }, ref) => {
  const [liked, setLiked] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleLike = (index, e, plant) => {
    e.stopPropagation();

    const newLiked = { ...liked, [index]: !liked[index] };
    setLiked(newLiked);

    // Сохраняем в localStorage для избранного
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (!newLiked[index]) {
      // Удаляем из избранного
      const updated = favorites.filter((item) => item.id !== plant.uniqueId);
      localStorage.setItem("favorites", JSON.stringify(updated));
    } else {
      // Добавляем в избранное
      if (!favorites.some((item) => item.id === plant.uniqueId)) {
        favorites.push({
          id: plant.uniqueId,
          name: plant.name,
          price: plant.price,
          img: plant.img,
        });
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
    }
  };

  const openModal = (plant) => {
    setSelectedProduct({
      ...plant,
      id: plant.uniqueId,
      uniqueId: plant.uniqueId,
    });
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  // Загружаем избранное из localStorage при монтировании
  React.useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const likedState = {};
    plants.forEach((plant, idx) => {
      const uniqueId = `${id}-${idx}`;
      likedState[idx] = favorites.some((item) => item.id === uniqueId);
    });
    setLiked(likedState);
  }, [id, plants]);

  // Добавляем данные по уходу для каждого растения
  const plantsWithCare = plants.map((plant, idx) => ({
    ...plant,
    uniqueId: `${id}-${idx}`,
    watering: plant.watering || "Умеренный, 1 раз в неделю",
    light: plant.light || "Яркий рассеянный свет",
    temp: plant.temp || "18-25°C",
    feeding: plant.feeding || "Весной и летом 1 раз в месяц",
  }));

  return (
    <>
      <section id={id} ref={ref} className="products">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        <div className="cards">
          {plantsWithCare.map((plant, index) => (
            <div
              key={plant.uniqueId}
              className="card-item"
              onClick={() => openModal(plant)}
              style={{ cursor: "pointer" }}
            >
              <div className="card">
                <img src={plant.img} alt={plant.name} className="card-img" />
                <div
                  className="card-fav"
                  onClick={(e) => toggleLike(index, e, plant)}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    width: "24px",
                    height: "24px",
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 10,
                  }}
                >
                  {liked[index] ? "❤️" : "🤍"}
                </div>
              </div>
              <div className="card-name">{plant.name}</div>
              <div className="card-price">{plant.price}</div>
            </div>
          ))}
        </div>
      </section>

      <ProductModal product={selectedProduct} onClose={closeModal} />
    </>
  );
});

export default Products;

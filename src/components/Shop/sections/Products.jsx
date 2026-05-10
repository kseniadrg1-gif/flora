import React, { useState } from "react";
import ProductModal from "./ProductModal";

const Products = React.forwardRef(({ id, title, description, plants }, ref) => {
  const [liked, setLiked] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleLike = (index, e) => {
    e.stopPropagation();
    setLiked((prev) => ({ ...prev, [index]: !prev[index] }));
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
                  onClick={(e) => toggleLike(index, e)}
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

import React, { useState } from "react";

const Products = React.forwardRef(({ id, title, description, plants }, ref) => {
  const [liked, setLiked] = useState({});

  const toggleLike = (index) => {
    setLiked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id={id} ref={ref} className="products">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <div className="cards">
        {plants.map((plant, index) => (
          <div key={index} className="card-item">
            <div className="card">
              <img src={plant.img} alt={plant.name} className="card-img" />
              <img
                src={liked[index] ? "/icon/red-heart.png" : "/icon/Heart.png"}
                alt="favorite"
                className="card-fav"
                onClick={() => toggleLike(index)}
              />
            </div>
            <div className="card-name">{plant.name}</div>
            <div className="card-price">{plant.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Products;

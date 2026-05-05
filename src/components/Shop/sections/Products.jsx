import React from "react";

const Products = React.forwardRef(({ title, description, plants }, ref) => (
  <section ref={ref} className="products">
    <h2>{title}</h2>
    {description && <p>{description}</p>}
    <div className="cards">
      {plants.map((plant, index) => (
        <div key={index} className="card-item">
          <div className="card">
            <img src="/Heart.png" alt="favorite" className="card-fav" />
          </div>
          <div className="card-name">{plant.name}</div>
          <div className="card-price">{plant.price}</div>
        </div>
      ))}
    </div>
  </section>
));

export default Products;

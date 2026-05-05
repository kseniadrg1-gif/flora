import React from "react";

const Care = React.forwardRef((props, ref) => (
  <section ref={ref} className="care">
    <h2>СРЕДСТВА ДЛЯ УХОДА</h2>
    <p>Полное руководство по уходу для каждого растения описанно в карточке </p>
    <div className="care-grid">
      <div>
        <div className="care-card">
          <img src="/Heart.png" alt="favorite" className="care-fav" />
        </div>
        <p className="price__care">
          Кокосовый субстрат <br /> 200₽
        </p>
      </div>
      <div>
        <div className="care-card">
          <img src="/Heart.png" alt="favorite" className="care-fav" />
        </div>
        <p className="price__care">
          Насадка рассеиватель <br /> 200₽
        </p>
      </div>
      <div>
        <div className="care-card">
          <img src="/Heart.png" alt="favorite" className="care-fav" />
        </div>
        <p className="price__care">
          Драцена <br /> 5000₽
        </p>
      </div>
      <div>
        <div className="care-card">
          <img src="/Heart.png" alt="favorite" className="care-fav" />
        </div>
        <p className="price__care">
          Dracaena Marginata <br /> 5000₽
        </p>
      </div>
    </div>
  </section>
));

export default Care;

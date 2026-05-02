import "./Shop.css";

export default function Shop() {
  return (
    <div className="page">
      {/* HEADER */}
      <header className="topbar">
        <nav>
          <span>каталог</span>
          <span>уход</span>
          <span>доставка</span>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>
          <span>F</span>
          <span>l</span>
          <span>o</span>
          <span>r</span>
          <span>a</span>
        </h1>
        <button>Выбрать растение</button>

        <div className="hero-bottom">
          <div className="hero-text">
            Добавьте свежести и энергии вашему пространству с помощью наших
            зеленых друзей. Пусть каждый лист станет символом заботы и любви к
            природе
          </div>

          <div className="categories">
            <span>Лиственное</span>
            <span>Суккуленты</span>
            <span>Деревья</span>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="why">
        <p>КОМНАТНЫЕ РАСТЕНИЯ</p>
        <h2>ПОЧЕМУ ПРИВЛЕКАЮТ</h2>
        <p className="subtitle">
          Любые виды классических, или экзотических растений
        </p>

        <div className="why-grid">
          <div>
            <h3>1</h3>
            <strong>Эстетика</strong>
            <p>
              Растения делают пространство более уютным и привлекательным. Они
              добавляют зелени и цвет, создавая приятную атмосферу
            </p>
          </div>

          <div>
            <h3>2</h3>
            <strong>Польза для здоровья</strong>
            <p>
              Растения очищают воздух, поглощая углекислый газ и выделяя
              кислород. Некоторые виды могут уменьшать уровень стресса, повышать
              настроение
            </p>
          </div>

          <div>
            <h3>3</h3>
            <strong>Развлечения и хобби</strong>
            <p>
              Для многих выращивание растений становится увлекательным хобби,
              которое приносит удовлетворение и радость
            </p>
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="types">
        <h2>РАЗНОВИДНОСТЬ РАСТЕНИЙ</h2>

        <div className="types-grid">
          <div>декоративно лиственные</div>
          <div>суккуленты</div>
          <div>деревья</div>
        </div>
      </section>

      {/* PRODUCTS */}
      <Products title="ЛИСТВЕННЫЕ" />
      <Products title="СУККУЛЕНТЫ" />
      <Products title="КОМНАТНЫЕ ДЕРЕВЬЯ" />

      {/* CARE */}
      <section className="care">
        <h2>СРЕДСТВА ДЛЯ УХОДА</h2>

        <div className="care-grid">
          <div />
          <div />
          <div />
          <div />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>LovLive</p>
        <p>89270833550</p>
      </footer>
    </div>
  );
}

function Products({ title }) {
  return (
    <section className="products">
      <h2>{title}</h2>

      <div className="cards">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="card" />
          ))}
      </div>
    </section>
  );
}

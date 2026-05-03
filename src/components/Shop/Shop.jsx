import "./Shop.css";

export default function Shop() {
  return (
    <div className="page">
      {/* HEADER */}
      <header className="topbar">
        <nav>
          <button className="nav-btn">каталог</button>
          <button className="nav-btn">уход</button>
          <button className="nav-btn">доставка</button>
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
        <button className="select-plant-btn">Выбрать растение</button>

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
        <p>выбери что по душе</p>
      </section>

      {/* PRODUCTS */}
      <Products
        title="ЛИСТВЕННЫЕ"
        description="создают уютную атмосферу благодаря своей пышной зелени и разнообразию форм, идеально подходя для любого интерьера"
        plants={[
          { name: "Замножулькас", price: "5000Р" },
          { name: "Лист Скрипки Рис", price: "5000Р" },
          { name: "Пальма Кентини", price: "5000Р" },
          { name: "Черное растение ZZ", price: "5000Р" },
        ]}
      />
      <Products
        title="СУККУЛЕНТЫ"
        description="Они умеют целый месяц обходиться без влаги, не боятся яркого солнца, растут на камнях и скалах, где совсем нет плодородной почвы"
        plants={[
          { name: "Большой Перуанский Яблоневый Кактус", price: "3500Р" },
          { name: "Растение Процветания Слонового Куста", price: "3500Р" },
          { name: "Prickly Pear Cactus 'Joseph's Coat'", price: "3500Р" },
          { name: "Rhipsalis Baccifera Mistletoe Cactus", price: "3500Р" },
        ]}
      />
      <Products
        title="КОМНАТНЫЕ ДЕРЕВЬЯ"
        description="они помогают людям чувствовать себя ближе к природе, особенно в городской среде"
        plants={[
          { name: "Крупное растение Юкки", price: "4500Р" },
          { name: "Лимонное дерево", price: "4500Р" },
          { name: "Крупная Драцена Тростниковая", price: "5000Р" },
          { name: "Дерево Dragaena Marginata", price: "5000Р" },
        ]}
      />

      {/* CARE */}
      <section className="care">
        <h2>СРЕДСТВА ДЛЯ УХОДА</h2>
        <p>
          Полное руководство по уходу для каждого растения описанно в
          карточке{" "}
        </p>
        <div className="care-grid">
          <div />
          <div />
          <div />
          <div />
        </div>
      </section>

      {/* FOOTER */}
      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-columns">
          {/* Колонка 1 */}
          <div className="footer-col">
            <h3>LovLive</h3>
            <p>89270833550</p>
            <p>телефон call-центра</p>
          </div>

          {/* Колонка 2 */}
          <div className="footer-col">
            <h4>о нас</h4>
            <ul>
              <li>политика обработки персональных данных</li>
              <li>документы сайта</li>
              <li>самовывоз</li>
            </ul>
          </div>

          {/* Колонка 3 */}
          <div className="footer-col">
            <h4>клиентам</h4>
            <ul>
              <li>вопросы-ответы</li>
              <li>доставка</li>
              <li>возврат товара</li>
            </ul>
          </div>

          {/* Колонка 4 */}
          <div className="footer-col">
            <h4>контакты</h4>
            <ul>
              <li>общие контакты для предложений по ассортименту</li>
            </ul>
          </div>
        </div>

        {/* Нижняя строка с cookies */}
        <div className="footer-cookies">
          <p>
            Мы используем cookies. Используя сайт, вы соглашаетесь с обработкой
            данных с целью сбора аналитики. Cookies можно отключить в любой
            момент в настройках вашего браузера.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Products({ title, description, plants }) {
  return (
    <section className="products">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <div className="cards">
        {plants.map((plant, index) => (
          <div key={index} className="card-item">
            <div className="card"></div>
            <div className="card-name">{plant.name}</div>
            <div className="card-price">{plant.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

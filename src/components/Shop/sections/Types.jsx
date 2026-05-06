export default function Types() {
  return (
    <section className="types">
      <h2>РАЗНОВИДНОСТЬ РАСТЕНИЙ</h2>
      <div className="types-grid">
        <div className="type-card">
          <img
            src="/plant cards/декоративно-лиственные.png"
            alt="декоративно лиственные"
          />
          <div className="type-text">декоративно лиственные</div>
        </div>
        <div className="type-card">
          <img src="/plant cards/суккуленты.png" alt="суккуленты" />
          <div className="type-text">суккуленты</div>
        </div>
        <div className="type-card">
          <img src="/plant cards/деревья.png" alt="деревья" />
          <div className="type-text">деревья</div>
        </div>
      </div>
      <p>выбери что по душе</p>
    </section>
  );
}

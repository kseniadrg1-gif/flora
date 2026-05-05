export default function Header({ onCatalogClick, onCareClick }) {
  return (
    <header className="topbar">
      <nav>
        <button className="nav-btn" onClick={onCatalogClick}>
          каталог
        </button>
        <button className="nav-btn" onClick={onCareClick}>
          уход
        </button>
        <button className="nav-btn">доставка</button>
      </nav>
    </header>
  );
}

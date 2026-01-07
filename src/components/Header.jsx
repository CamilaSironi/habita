import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useFavorites } from "../context/FavoritesContext";

export default function Header() {
  const { favorites } = useFavorites();

  return (
    <header className="header">
      <div className="header-inner">
        <Logo />

        <nav className="nav">
          <Link to="/properties">Properties</Link>

          <Link to="/favorites" className="favorites-btn">
            Favorites
            {favorites.length > 0 && (
              <span className="badge">{favorites.length}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

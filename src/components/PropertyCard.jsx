import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function PropertyCard({ property }) {

  const {toggleFavorite, isFavorite} = useFavorites();

  return (
    <article className="card property-card">
      <Link to={`/properties/${property.id}`} className="card-link">

        <div className="card-image">
          <img
            src={property.image}
            alt={property.title}
            loading="lazy"
          />
        </div>

        <div className="card-content">
          <p className="card-price">
            USD${property.price.toLocaleString()}
          </p>

          <h3 className="card-title">
            {property.title}
          </h3>

          <p className="card-meta">
            {property.location.city} · {property.type}
          </p>
        </div>

      </Link>

      <button
        className={`favorite-btn ${isFavorite(property.id) ? "active" : ""}`}
        onClick={() => toggleFavorite(property.id)}
        aria-label="Toggle favorite"
      >
        ♥
      </button>

    </article>
  );
}

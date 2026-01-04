import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function PropertyCard({ property }) {

  const {toggleFavorite, isFavorite} = useFavorites();

  return (
    <article className="property-card">

      <button
        className={`favorite-btn ${isFavorite(property.id) ? "active" : ""}`}
        onClick={() => toggleFavorite(property.id)}
        aria-label="Toggle favorite"
      >
        ♥
      </button>

      <img src={property.image} alt={property.title} />

      <div className="property-info">
        <h3>{property.title}</h3>

        <p>
          {property.location.city}, {property.location.country}
        </p>

        <p>
          {property.bedrooms} bedrooms · {property.area} m²
        </p>

        <strong>
          {property.currency} {property.price}
        </strong>

        <Link to={`/properties/${property.id}`}>
          View details
        </Link>
      </div>
    </article>
  );
}

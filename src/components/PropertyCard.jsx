import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  return (
    <article className="property-card">
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

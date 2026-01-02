import { useParams } from "react-router-dom";
import {properties} from "../data/properties";

export default function PropertyDetail() {
  const { id } = useParams();

  const property = properties.find(
    (p) => p.id === id
  );

  if (!property) {
    return (
      <section 
        style={
            { 
                padding: "4rem", 
                textAlign: "center" 
            }}
        >
        <h2>Property not found</h2>
        <p>The property you are looking for does not exist.</p>
      </section>
    );
  }

  return (
    <section className="property-detail">
      <img
        src={property.image}
        alt={property.title}
        className="detail-image"
      />

      <div className="detail-content">
        <h1>{property.title}</h1>

        <p>
          {property.location.city}, {property.location.country}
        </p>

        <strong>
          {property.currency} {property.price}
        </strong>

        <p>{property.description}</p>
      </div>
    </section>
  );
}

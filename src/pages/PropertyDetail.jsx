import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {properties} from "../data/properties";
import MainLayout from "../layouts/MainLayout";
import PropertyMap from "../components/PropertyMap";
import ContactForm from "../components/ContactForm";

export default function PropertyDetail() {

  const [showMap, setShowMap] = useState(false);
  
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
        <Link to="/">Home</Link>
      </section>
    );
  }

  return (
    <MainLayout> 

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

      <button
        className="map-toggle"
        onClick={() => setShowMap((prev) => !prev)}
      >
        {showMap ? "Hide map" : "View on map"}
      </button>
    </section>

    {showMap && (
      <div className="map-wrapper">
        <PropertyMap
          lat={property.location.lat}
          lng={property.location.lng}
          title={property.title}
        />
      </div>
    )}

    <ContactForm property={property} />

    </MainLayout>
  );
}

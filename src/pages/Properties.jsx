import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";

export default function Properties() {
  return (
    <section>
      <h2>Available Properties</h2>

      <div className="properties-grid">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </div>
    </section>
  );
}

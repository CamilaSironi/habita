import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";

export default function Home() {
  return (
    <section>
      <h2>Featured Properties</h2>

      <div className="properties-grid">
        {properties.slice(0, 3).map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </div>
    </section>
  );
}

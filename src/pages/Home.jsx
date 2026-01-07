import { Link } from "react-router-dom";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import MainLayout from "../layouts/MainLayout";

export default function Home() {

  return (
    <MainLayout>
      <section>

        <h2>Most Popular</h2>

        <div className="properties-grid">
          {properties.slice(0, 3).map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
        
      </section>
    </MainLayout>
  );
}

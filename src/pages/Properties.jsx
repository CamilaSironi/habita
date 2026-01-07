import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import Filters from "../components/Filters";
import PropertyCard from "../components/PropertyCard";
import PropertyCardSkeleton from "../components/PropertyCardSkeleton";
import { useFilteredProperties } from "../hooks/useFilteredProperties";

export default function Properties() {
  const properties = useFilteredProperties();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MainLayout>

      <Filters />

      <section className="properties">
        <h2>Available Properties</h2>

        <div className="properties-grid">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <PropertyCardSkeleton key={i} />
            ))
          ) : properties.length === 0 ? (
            <p>No properties found.</p>
          ) : (
          properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))
        )}
        </div>
      </section>
    </MainLayout>
  );
}

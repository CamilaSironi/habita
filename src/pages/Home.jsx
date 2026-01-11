import { useEffect, useState } from "react";
import { properties } from "../data/properties";
import PropertyCardSkeleton from "../components/PropertyCardSkeleton";
import PropertyCard from "../components/PropertyCard";
import MainLayout from "../layouts/MainLayout";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
      return () => clearTimeout(timer);
  }, []);

  return (
    <MainLayout>
      <section>

        <h2>Most Popular</h2>

        <div className="properties-grid">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <PropertyCardSkeleton key={i} />
            ))
            ) : properties.length === 0 ? (
              <p>No properties found.</p>
            ) : (
              properties.slice(0, 3).map((property) => (
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

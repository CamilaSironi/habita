import { useState, useMemo } from "react";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import Filters from "../components/Filters";

export default function Properties() {

  const [city, setCity] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [search, setSearch] = useState("");

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {

      const matchesCity = city === "" || property.location.city === city;
      const matchesPrice = maxPrice === "" || property.price <= Number(maxPrice);
      const matchesSearch =
        search === "" ||
        property.title.toLowerCase().includes(search.toLowerCase()) ||
        property.location.city
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesCity && matchesPrice && matchesSearch;
    });
  }, [city, maxPrice, search]);

  return (
    <section className="properties">
      <h2>Available Properties</h2>

      <Filters 
        city={city}
        setCity={setCity}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        search={search}
        setSearch={setSearch}
      />

      <div className="properties-grid">
        {filteredProperties.length === 0 ? (
          <p>No properties found.</p>
        ) : (
        filteredProperties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))
      )}
      </div>
    </section>
  );
}

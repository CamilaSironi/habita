import { useState, useMemo } from "react";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import Filters from "../components/Filters";

export default function Properties() {

  const [city, setCity] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const filteredProperties = useMemo(() => {
    let result = properties.filter((property) => {

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

    if (sort === "price-asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "price-desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;

  }, [city, maxPrice, search, sort]);

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
        sort={sort}
        setSort={setSort}
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

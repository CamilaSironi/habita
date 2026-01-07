import { useMemo } from "react";
import { properties } from "../data/properties";
import { useFilters } from "../context/FilterContext";

export function useFilteredProperties() {
  const { city, maxPrice, search, sort, type } = useFilters();

  const filteredProperties = useMemo(() => {
    let result = properties.filter((property) => {
      const matchesType = !type || property.type === type;
      const matchesCity = !city || property.location.city === city;
      const matchesPrice = !maxPrice || property.price <= Number(maxPrice);
      const matchesSearch =
        !search ||
        property.title.toLowerCase().includes(search.toLowerCase()) ||
        property.location.city.toLowerCase().includes(search.toLowerCase());

      return (
        matchesType &&
        matchesCity &&
        matchesPrice &&
        matchesSearch
      );
    });

    if (sort === "price-asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "price-desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [city, maxPrice, search, sort, type]);

  return filteredProperties;
}

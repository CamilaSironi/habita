import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [city, setCity] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [type, setType] = useState("");

  const clearFilters = () => {
    setType(null);
  };

  return (
    <FilterContext.Provider
      value={{
        city,
        setCity,
        maxPrice,
        setMaxPrice,
        search,
        setSearch,
        sort,
        setSort,
        type,
        setType,
        clearFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilters must be used within FilterProvider");
  }
  return context;
}

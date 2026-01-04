import { useFilters } from "../context/FilterContext";

export default function PropertyFilters() {
  const { type, setType, clearFilters } = useFilters();

  return (
    <div className="property-filters">
      <button
        className={type === "house" ? "active" : ""}
        onClick={() => setType("house")}
      >
        Houses
      </button>

      <button
        className={type === "apartment" ? "active" : ""}
        onClick={() => setType("apartment")}
      >
        Apartments
      </button>

      <button
        className={type === "loft" ? "active" : ""}
        onClick={() => setType("loft")}
      >
        Lofts
      </button>

      <button
        className={type === "villa" ? "active" : ""}
        onClick={() => setType("villa")}
      >
        Villas
      </button>

      {type && (
        <button onClick={clearFilters}>
          Clear Type
        </button>
      )}
    </div>
  );
}

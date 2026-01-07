import { useFilters } from "../context/FilterContext";

export default function Filters() {

    const { 
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
    } = useFilters();

    return(
        <div className="filters">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search property by name or city"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select value={city} onChange={(e) => setCity(e.target.value)}>
                    <option value="">All cities</option>
                    <option value="Búzios">Búzios</option>  
                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                    <option value="São Paulo">São Paulo</option>
                </select>

                <input
                    type="number"
                    placeholder="Max price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />

                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="">Sort by</option>
                    <option value="price-asc">Price: low to high</option>
                    <option value="price-desc">Price: high to low</option>
                </select>
            </div>
            
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

        </div>
    );
}
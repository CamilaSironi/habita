export default function Filters({
    city,
    setCity,
    maxPrice,
    setMaxPrice,
    search,
    setSearch,
    sort,
    setSort
}) {
    return(
        <div className="filters">

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
    );
}
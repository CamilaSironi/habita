import { useFavorites } from "../context/FavoritesContext";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";

export default function Favorites() {
  const { favorites } = useFavorites();

  const favoriteProperties = properties.filter((p) =>
    favorites.includes(p.id)
  );

  if (favoriteProperties.length === 0) {
    return <p>No favorites yet.</p>;
  }

  return (
    <section>
      <h2>Your favorites</h2>
      <div className="grid">
        {favoriteProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}

export default function PropertyCardSkeleton() {
  return (
    <article className="property-card skeleton">
      <div className="image-skeleton" />

      <div className="content">
        <div className="line title" />
        <div className="line location" />
        <div className="line price" />
      </div>
    </article>
  );
}

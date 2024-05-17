export function ItemMap({ src }) {
  const defaultSrc = 'public/placeholderImg.svg';
  const mapSrc = src || defaultSrc;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">Map</h2>
      <div className="mt-4 rounded-lg overflow-hidden">
        <img
          alt="Map"
          className="w-full h-auto"
          height={400}
          src={mapSrc}
          style={{
            aspectRatio: "800/400",
            objectFit: "cover",
          }}
          width={800}
        />
      </div>
    </div>
  );
}
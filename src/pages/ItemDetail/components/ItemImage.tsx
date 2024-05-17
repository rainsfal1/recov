export function ItemImage({ src }) {
  const defaultSrc = 'public/placeholderImg.svg';
  const imageSrc = src || defaultSrc;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">Item Image</h2>
      <div className="mt-4 rounded-lg overflow-hidden">
        <img
          alt="Item Image"
          className="w-full h-auto"
          height={400}
          src={imageSrc}
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
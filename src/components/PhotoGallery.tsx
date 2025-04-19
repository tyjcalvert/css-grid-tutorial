import "./PhotoGallery.css";

export default function PhotoGallery() {
  return (
    <section className="photo-gallery">
      {Array.from({ length: 12 }, (_, i) => (
        <div key={`photo-${i}`} className="card photo-card">
          <img
            src={`https://picsum.photos/200/200?random=${i}`}
            alt={`Random ${i}`}
          />
        </div>
      ))}
    </section>
  )
}
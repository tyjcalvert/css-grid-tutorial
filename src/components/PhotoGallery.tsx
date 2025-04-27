import { useCardImages } from "../hooks/useCardImages";
import "./PhotoGallery.css";

export default function PhotoGallery() {
  const cardImages = useCardImages();

  return (
    <section className="photo-gallery">
      {cardImages.map(({ name, src }, i) => (
        <div
          key={`photo-card-${i}`}
          aria-label={name}
          style={{ backgroundImage: `url(${src})` }}
          className="card"
        ></div>
      ))}
    </section>
  );
}

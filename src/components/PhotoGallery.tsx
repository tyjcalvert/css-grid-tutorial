import { useCardImages } from "../hooks/useCardImages";
import "./PhotoGallery.css";

export default function PhotoGallery() {
  const cardImages = useCardImages();

  return (
    <section className="photo-gallery">
      {cardImages.map(({ name, src }) => (
        <img src={src} alt={name} />
      ))}
    </section>
  );
}

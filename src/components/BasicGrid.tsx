import "./BasicGrid.css";

export default function BasicGrid() {
  return (
    <section className="basic-grid">
      {Array.from({ length: 12 }, (_, i) => (
        <div key={`basic-card-${i}`} className="card">{i + 1}</div>
      ))}
    </section>
  );
}

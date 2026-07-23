import "./SectionTitle.css";

function SectionTitle({
  title,
  subtitle,
  align = "center",
}) {
  return (
    <div
      className="section-title"
      style={{ textAlign: align }}
    >
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

export default SectionTitle;
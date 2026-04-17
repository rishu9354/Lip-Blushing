const ITEMS = [
  { icon: "🌿", title: "100% Vegan Pigments",   desc: "Safe, cruelty-free pigments imported from Korea for lasting, vibrant results." },
  { icon: "✨", title: "Korean Technique",       desc: "Nano-blading precision for hyper-realistic, feather-soft colour deposit." },
  { icon: "⏱️", title: "Lasts 2–3 Years",       desc: "Wake up with perfect lips every morning — no lipstick required." },
  { icon: "🩺", title: "Certified & Hygienic",  desc: "Sterilised single-use tools, licensed PMU artist, clinical-grade studio." },
  { icon: "🎨", title: "Fully Customisable",    desc: "Shade-matched to your skin tone, shape corrected, symmetry perfected." },
  { icon: "💧", title: "Painless Process",       desc: "Topical numbing cream applied — most clients describe it as comfortable." },
];

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="section-wrapper">
        <p className="section-label">Why Choose Us</p>
        <h2 className="section-heading">Benefits of Lip Blushing</h2>

        <div className="benefits-grid">
          {ITEMS.map(({ icon, title, desc }) => (
            <div key={title} className="benefit-card">
              <div className="benefit-card__icon">{icon}</div>
              <div className="benefit-card__title">{title}</div>
              <p  className="benefit-card__desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const PACKAGES = [
  {
    name: "Classic Blush",
    price: "₹12,000",
    note: "Starting from",
    features: ["Single-tone pigment", "Shape mapping", "Topical numbing", "1 touch-up included"],
    highlight: false,
  },
  {
    name: "Ombre Pout",
    price: "₹16,000",
    note: "Starting from",
    features: ["Dual-tone gradient", "Advanced shape design", "Topical numbing", "1 touch-up included", "Aftercare kit"],
    highlight: true,
  },
  {
    name: "Aquarelle Lips",
    price: "₹20,000",
    note: "Starting from",
    features: ["Watercolour wash effect", "Customised design", "Topical numbing", "1 touch-up included", "Aftercare kit", "Priority booking"],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="pricing">
      <div className="section-wrapper">
        <p className="section-label">Investment</p>
        <h2 className="section-heading">Pricing</h2>
        <p className="pricing__note">
          Final price varies by complexity. Book a free consultation for an exact quote.
        </p>

        <div className="pricing__cards">
          {PACKAGES.map(({ name, price, note, features, highlight }) => (
            <div
              key={name}
              className={`pricing-card ${highlight ? "pricing-card--highlight" : ""}`}
            >
              {highlight && (
                <span className="pricing-card__badge">Most Popular</span>
              )}

              <div className="pricing-card__name">{name}</div>
              <div className="pricing-card__note">{note}</div>
              <div className="pricing-card__price">{price}</div>

              <div className="pricing-card__features">
                {features.map((f) => (
                  <div key={f} className="pricing-card__feature">
                    <span className="pricing-card__feature-dot">✦</span>
                    {f}
                  </div>
                ))}
              </div>

              <a href="#lead-form" className="pricing-card__cta">
                Book This Package
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const PAIRS = [
  { label: "Natural Rose", before: "#c9a0a0", after: "#b55a52" },
  { label: "Coral Nude",   before: "#d4b5a8", after: "#c0705e" },
  { label: "Berry Pout",   before: "#c7a4a4", after: "#8b3a4a" },
];

function LipSvg({ fill }) {
  return (
    <svg viewBox="0 0 120 60" width="90" style={{ opacity: 0.8 }}>
      <ellipse cx="60" cy="30" rx="52" ry="22" fill={fill} />
      <path d="M8 30 Q60 8 112 30" stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.5" />
      <path d="M8 30 Q60 52 112 30" stroke="#fff" strokeWidth="1"   fill="none" opacity="0.3" />
    </svg>
  );
}

export default function BeforeAfter() {
  return (
    <section className="before-after">
      <div className="section-wrapper">
        <p className="section-label">Transformations</p>
        <h2 className="section-heading">Before &amp; After</h2>
        <p className="before-after__subtitle">
          Real results from our clients — subtle, natural, beautiful.
        </p>

        <div className="ba-grid">
          {PAIRS.map(({ label, before, after }) => (
            <div key={label} className="ba-card">
              <div className="ba-card__images">

                {/* Before */}
                <div className="ba-card__side">
                  <div
                    className="ba-card__swatch"
                    style={{ background: `linear-gradient(160deg, #f0e0da, ${before})` }}
                  >
                    <LipSvg fill={before} />
                  </div>
                  <span className="ba-card__tag ba-card__tag--before">BEFORE</span>
                </div>

                {/* After */}
                <div className="ba-card__side">
                  <div
                    className="ba-card__swatch"
                    style={{ background: `linear-gradient(160deg, #e8c0b5, ${after})` }}
                  >
                    <LipSvg fill={after} />
                  </div>
                  <span className="ba-card__tag ba-card__tag--after">AFTER</span>
                </div>

              </div>
              <div className="ba-card__footer">
                Shade: <strong>{label}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
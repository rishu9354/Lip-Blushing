export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow-top" />
      <div className="hero__glow-bottom" />

      <div className="hero__badge">Korean PMU Specialist · Delhi</div>

      <h1 className="hero__title">
        Lip Blushing
        <br />
        <em>in Delhi</em>
      </h1>

      <p className="hero__subtitle">
        Wake up with perfectly tinted, defined lips — every single day.
        Natural. Effortless. Korean-crafted.
      </p>

      <div className="hero__ctas">
        <a href="#lead-form" className="btn-primary">
          Book Free Consultation
        </a>
        <a
          href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20want%20to%20know%20more%20about%20lip%20blushing"
          className="btn-outline"
        >
          💬 Chat on WhatsApp
        </a>
      </div>

      <div className="hero__trust">
        {["200+ Happy Clients", "Korean Technique", "Vegan Pigments"].map((t) => (
          <div key={t} className="hero__trust-item">
            <span>✦</span> {t}
          </div>
        ))}
      </div>
    </section>
  );
}
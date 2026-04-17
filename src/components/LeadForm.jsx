import { useState } from "react";

export default function LeadForm() {
  const [form, setForm] = useState({ name: "", phone: "", shade: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.phone) return;
    const msg = encodeURIComponent(
      `Hi Elora's PMU! My name is ${form.name}. I'm interested in lip blushing` +
      `${form.shade ? ` (${form.shade})` : ""}. My number is ${form.phone}. Please let me know about availability.`
    );
    window.open(`https://wa.me/91XXXXXXXXXX?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="lead-form" className="lead-form">
      <div className="section-wrapper">
        <p className="section-label section-label--gold">Limited Slots Available</p>
        <h2 className="section-heading section-heading--light">
          Book Your Free Consultation
        </h2>
        <p className="lead-form__subtitle">
          Fill in your details and we'll reach out within 2 hours to confirm your appointment.
        </p>

        {submitted ? (
          <div className="lead-form__success">
            <div className="lead-form__success-icon">🌸</div>
            <div className="lead-form__success-title">Thank You, {form.name}!</div>
            <p className="lead-form__success-msg">
              We've received your request. Check your WhatsApp for confirmation.
            </p>
          </div>
        ) : (
          <div className="lead-form__fields">
            <input
              className="lead-form__input"
              type="text"
              name="name"
              placeholder="Your Name *"
              value={form.name}
              onChange={handleChange}
            />
            <input
              className="lead-form__input"
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={form.phone}
              onChange={handleChange}
            />
            <select
              className="lead-form__select"
              name="shade"
              value={form.shade}
              onChange={handleChange}
            >
              <option value="" disabled>Preferred Shade (optional)</option>
              <option value="Natural Rose">Natural Rose</option>
              <option value="Coral Nude">Coral Nude</option>
              <option value="Berry Pout">Berry Pout</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>

            <button className="lead-form__submit" onClick={handleSubmit}>
              💬 Send via WhatsApp
            </button>

            <a href="tel:+91XXXXXXXXXX" className="lead-form__call-link">
              📞 Prefer to call? +91-XXXXXXXXXX
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
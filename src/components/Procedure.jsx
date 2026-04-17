const STEPS = [
  { num: "01", title: "Consultation",         desc: "We discuss your desired shape, shade, and skin undertone. Patch test done." },
  { num: "02", title: "Numbing",              desc: "Topical anaesthetic cream applied for 20–30 min for a comfortable session." },
  { num: "03", title: "Mapping & Design",     desc: "Lip shape is carefully mapped and symmetry is checked before any pigment." },
  { num: "04", title: "Pigment Application",  desc: "Korean nano-needling technique deposits pigment in precise, feather strokes." },
  { num: "05", title: "Touch-Up (4–6 wks)",   desc: "A complimentary touch-up session to perfect colour and shape retention." },
];

export default function Procedure() {
  return (
    <section className="procedure">
      <div className="section-wrapper">
        <p className="section-label section-label--gold">What to Expect</p>
        <h2 className="section-heading section-heading--light">The Procedure</h2>

        <div className="procedure__timeline">
          <div className="procedure__line" />
          <div className="procedure__steps">
            {STEPS.map(({ num, title, desc }) => (
              <div key={num} className="procedure__step">
                <div className="procedure__step-num">{num}</div>
                <div className="procedure__step-content">
                  <div className="procedure__step-title">{title}</div>
                  <p   className="procedure__step-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
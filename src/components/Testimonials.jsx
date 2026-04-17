const REVIEWS = [
  {
    name: "Priya S.",
    location: "South Delhi",
    text: "I was so nervous but Elora made me feel completely at ease. My lips look absolutely gorgeous — soft, natural, exactly the rose pout I wanted. Worth every rupee!",
    rating: 5,
    shade: "Natural Rose",
  },
  {
    name: "Anika R.",
    location: "Gurgaon",
    text: "Finally found a PMU artist in Delhi who actually uses Korean techniques. The result is so natural my husband didn't even notice for a week — he just kept saying I looked 'glowy'.",
    rating: 5,
    shade: "Coral Nude",
  },
  {
    name: "Mehak T.",
    location: "Noida",
    text: "Best decision I made this year. I used to spend 20 minutes on lip liner every morning. Now I literally wake up and go. The pigment healed beautifully — very soft.",
    rating: 5,
    shade: "Berry Pout",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-wrapper">
        <p className="section-label">Client Stories</p>
        <h2 className="section-heading">What Our Clients Say</h2>

        <div className="testimonials__cards">
          {REVIEWS.map(({ name, location, text, rating, shade }) => (
            <div key={name} className="testimonial-card">
              <div className="testimonial-card__stars">{"★".repeat(rating)}</div>
              <p className="testimonial-card__text">"{text}"</p>
              <div className="testimonial-card__footer">
                <div>
                  <div className="testimonial-card__name">{name}</div>
                  <div className="testimonial-card__location">{location}</div>
                </div>
                <span className="testimonial-card__shade">{shade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
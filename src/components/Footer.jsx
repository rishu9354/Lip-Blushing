const LINKS = [
  { label: "Instagram", href: "https://instagram.com/elorasofficial" },
  { label: "WhatsApp",  href: "https://wa.me/91XXXXXXXXXX" },
  { label: "Call",      href: "tel:+91XXXXXXXXXX" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">Elora's PMU</div>
      <div className="footer__tagline">Korean Esthetics · Delhi</div>

      <div className="footer__links">
        {LINKS.map(({ label, href }) => (
          <a key={label} href={href} className="footer__link">
            {label}
          </a>
        ))}
      </div>

      <p className="footer__copy">
        © 2025 Elora's PMU. All rights reserved. · Lip Blushing in Delhi
      </p>
    </footer>
  );
}
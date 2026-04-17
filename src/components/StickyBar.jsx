import { useState, useEffect } from "react";

export default function StickyBar() {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  return (
    <div className={`sticky-bar ${isSticky ? "visible" : ""}`}>
      <a
        href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20want%20to%20book%20a%20lip%20blushing%20consultation"
        className="sticky-bar__btn sticky-bar__btn--whatsapp"
      >
        💬 WhatsApp
      </a>
      <a
        href="tel:+91XXXXXXXXXX"
        className="sticky-bar__btn sticky-bar__btn--call"
      >
        📞 Call Now
      </a>
      <a
        href="#lead-form"
        className="sticky-bar__btn sticky-bar__btn--book"
      >
        📅 Book Now
      </a>
    </div>
  );
}
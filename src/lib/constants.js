// ------------------------------------------------------------------
// Brand & contact details. Edit these in ONE place to update the
// whole website (header, footer, WhatsApp buttons, emails, etc.).
// ------------------------------------------------------------------

export const BRAND = {
  name: "Diksha's Little Looms",
  short: "Little Looms",
  tagline: "Handwoven sarees, made to be worn and remembered",
  // Digits only, with country code, for wa.me links:
  whatsappNumber: "917011024750",
  // Pretty version for display:
  phoneDisplay: "+91 70110 24750",
  email: "diksha11081993@gmail.com",
  city: "India",
  instagram: "", // e.g. "https://instagram.com/your-handle" (leave "" to hide)
};

// All orders are prepaid. This line appears near every buy button.
export const PAYMENT_NOTE = "All orders are prepaid. Confirm your saree over WhatsApp or email and we’ll share secure payment details.";

// The saree categories you sell. The "slug" is used in the URL.
export const CATEGORIES = [
  { slug: "banarasi-silk", name: "Banarasi Silk", blurb: "Timeless zari weaves from the looms of Banaras." },
  { slug: "modal-silk", name: "Modal Silk", blurb: "Feather-light drape with a soft, luminous sheen." },
  { slug: "cotton", name: "Cotton", blurb: "Breathable everyday handloom for Indian weather." },
  { slug: "office-wear", name: "Office Wear", blurb: "Crisp, understated sarees for the working week." },
  { slug: "traditional", name: "Traditional", blurb: "Classic motifs and colours rooted in heritage." },
  { slug: "wedding", name: "Wedding", blurb: "Statement drapes for the big days and their guests." },
  { slug: "giftings", name: "Giftings", blurb: "Ready-to-gift sarees, wrapped with a handwritten note." },
];

export function categoryName(slug) {
  const c = CATEGORIES.find((x) => x.slug === slug);
  return c ? c.name : slug;
}

// Build a WhatsApp deep link with a pre-filled message.
export function waLink(message) {
  const base = `https://wa.me/${BRAND.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// Build a mailto link with subject + body.
export function mailLink(subject, body) {
  const params = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  const q = params.length ? `?${params.join("&")}` : "";
  return `mailto:${BRAND.email}${q}`;
}

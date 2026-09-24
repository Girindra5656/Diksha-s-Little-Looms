// ------------------------------------------------------------------
// Brand & contact details. Edit these in ONE place to update the
// whole website (header, footer, WhatsApp buttons, emails, etc.).
// ------------------------------------------------------------------

export const BRAND = {
  name: "Diksha's Little Looms",
  short: "Little Looms",
  tagline: "Handwoven sarees, made to be worn and remembered",
  whatsappNumber: "917011024750", // digits only, with country code
  phoneDisplay: "+91 70110 24750",
  email: "diksha11081993@gmail.com",
  // Registered business address (shown in footer + contact page).
  address: "Flora Heritage Tower, C-2004, Greater Noida West, Sector 1, 201318",
  // Registration / Unique Identification Number (shown in footer + contact).
  uin: "092600388546ESO",
  city: "India",
  instagram: "", // e.g. "https://instagram.com/your-handle" (leave "" to hide)
};

// All orders are prepaid. This line appears near every buy button.
export const PAYMENT_NOTE =
  "All orders are prepaid. Confirm your saree (and colour, if it has options) over WhatsApp or email and we’ll share secure payment details.";

// ==================================================================
// SHOP STRUCTURE
// Customers can browse two ways: by FABRIC (which contains weaves /
// sub-types) and by OCCASION. Add, remove or rename anything here —
// just keep each "slug" lowercase-with-hyphens and unique.
// ==================================================================

export const FABRICS = [
  {
    slug: "silk",
    name: "Silk",
    blurb: "Rich, lustrous weaves for festivals and celebrations.",
    weaves: [
      { slug: "banarasi", name: "Banarasi" },
      { slug: "katan", name: "Katan" },
      { slug: "modal", name: "Modal Silk" },
      { slug: "kesar", name: "Kesar" },
      { slug: "bangalori", name: "Bangalori" },
      { slug: "bhagalpuri", name: "Bhagalpuri" },
      { slug: "tussar", name: "Tussar" },
      { slug: "organza", name: "Organza" },
    ],
  },
  {
    slug: "cotton",
    name: "Cotton",
    blurb: "Breathable handloom for everyday Indian weather.",
    weaves: [
      { slug: "handloom", name: "Handloom" },
      { slug: "khadi", name: "Khadi" },
      { slug: "malmal", name: "Malmal (Mulmul)" },
      { slug: "jamdani", name: "Jamdani" },
      { slug: "ikat", name: "Ikat" },
      { slug: "chanderi", name: "Chanderi" },
    ],
  },
  {
    slug: "linen",
    name: "Linen",
    blurb: "Crisp, understated drapes with a natural texture.",
    weaves: [
      { slug: "pure-linen", name: "Pure Linen" },
      { slug: "linen-blend", name: "Linen Blend" },
    ],
  },
];

export const OCCASIONS = [
  { slug: "everyday", name: "Everyday", blurb: "Easy, comfortable sarees for regular wear." },
  { slug: "office-wear", name: "Office Wear", blurb: "Crisp, understated sarees for the working week." },
  { slug: "festive-wear", name: "Festive Wear", blurb: "Colourful drapes for festivals and functions." },
  { slug: "traditional", name: "Traditional", blurb: "Classic motifs rooted in heritage." },
  { slug: "wedding", name: "Wedding", blurb: "Statement sarees for the big days and their guests." },
  { slug: "gifting", name: "Gifting", blurb: "Ready-to-gift sarees, wrapped with a handwritten note." },
];

// --- lookup helpers (you don't need to edit these) ---

export function fabricBySlug(slug) {
  return FABRICS.find((f) => f.slug === slug) || null;
}
export function fabricName(slug) {
  return fabricBySlug(slug)?.name || slug;
}
export function allWeaves() {
  return FABRICS.flatMap((f) => f.weaves.map((w) => ({ ...w, fabric: f.slug })));
}
export function weaveName(slug) {
  return allWeaves().find((w) => w.slug === slug)?.name || slug;
}
export function occasionBySlug(slug) {
  return OCCASIONS.find((o) => o.slug === slug) || null;
}
export function occasionName(slug) {
  return occasionBySlug(slug)?.name || slug;
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

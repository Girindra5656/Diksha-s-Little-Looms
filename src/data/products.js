// ==================================================================
// YOUR SAREE CATALOGUE
// ------------------------------------------------------------------
// This is where you manage your shop. To add a saree, copy one block
// below, paste it, and change the details. To remove one, delete its
// block. To hide one temporarily, set  hidden: true.
//
//   id       – a short unique code (also used as the image file name)
//   name     – the saree's name shown to customers
//   category – must match a slug in src/lib/constants.js:
//              banarasi-silk | modal-silk | cotton | office-wear
//              traditional | wedding | giftings
//   price    – number only, in rupees (no commas, no ₹)
//   fabric   – e.g. "Pure Katan Silk"
//   color    – main colour, e.g. "Deep Wine"
//   blurb    – one short line shown on the card
//   details  – a fuller description for the product page
//   image    – "/products/<id>.svg"  (replace with your real photo,
//              e.g. "/products/DLL-101.jpg", once you add it)
//   featured – true to show it on the home page
//   hidden   – true to hide it from the shop
// ==================================================================

export const PRODUCTS = [
  {
    id: "DLL-101",
    name: "Rani Zari Banarasi",
    category: "banarasi-silk",
    price: 12500,
    fabric: "Pure Katan Silk",
    color: "Deep Wine",
    blurb: "Handwoven kadhwa buti with a broad zari border.",
    details:
      "A pure Katan silk Banarasi in a deep wine ground, woven on the handloom with gold zari kadhwa butis scattered across the body and a broad, richly patterned border. The pallu carries a traditional jhaalar. Comes with an unstitched matching blouse piece.",
    image: "/products/DLL-101.svg",
    featured: true,
  },
  {
    id: "DLL-102",
    name: "Ivory Kadwa Banarasi",
    category: "banarasi-silk",
    price: 15800,
    fabric: "Pure Katan Silk",
    color: "Ivory & Gold",
    blurb: "Bridal-soft ivory with all-over meenakari.",
    details:
      "An ivory Katan silk Banarasi with delicate meenakari work in soft rose and gold. Light enough for long wear, grand enough for a wedding. Includes a matching blouse piece.",
    image: "/products/DLL-102.svg",
    featured: true,
  },
  {
    id: "DLL-103",
    name: "Emerald Jangla Banarasi",
    category: "banarasi-silk",
    price: 18900,
    fabric: "Pure Katan Silk",
    color: "Emerald",
    blurb: "Dense jangla weave across the full body.",
    details:
      "A statement emerald Banarasi with a dense jangla vine pattern in gold zari covering the entire body, finished with a heavy pallu. A true heirloom piece.",
    image: "/products/DLL-103.svg",
  },
  {
    id: "DLL-201",
    name: "Blush Modal Silk",
    category: "modal-silk",
    price: 3200,
    fabric: "Modal Silk",
    color: "Blush Pink",
    blurb: "Cloud-light drape with a natural sheen.",
    details:
      "A blush-pink modal silk saree with a subtle self-sheen and a fine contrast border. Incredibly light and easy to drape — a favourite for long days.",
    image: "/products/DLL-201.svg",
    featured: true,
  },
  {
    id: "DLL-202",
    name: "Indigo Print Modal",
    category: "modal-silk",
    price: 3600,
    fabric: "Modal Silk",
    color: "Indigo",
    blurb: "Hand-block indigo motifs on a soft ground.",
    details:
      "Deep indigo modal silk with hand-block printed floral motifs in ivory. Soft, breathable and beautifully fluid. Comes with a matching blouse piece.",
    image: "/products/DLL-202.svg",
  },
  {
    id: "DLL-301",
    name: "Mustard Handloom Cotton",
    category: "cotton",
    price: 1850,
    fabric: "Handloom Cotton",
    color: "Mustard",
    blurb: "Crisp everyday cotton with a temple border.",
    details:
      "A mustard handloom cotton saree with a fine maroon temple border and a striped pallu. Breathable and easy to maintain — made for Indian weather.",
    image: "/products/DLL-301.svg",
    featured: true,
  },
  {
    id: "DLL-302",
    name: "Teal Khadi Cotton",
    category: "cotton",
    price: 2100,
    fabric: "Khadi Cotton",
    color: "Teal",
    blurb: "Handspun khadi with a natural slub texture.",
    details:
      "Handspun teal khadi cotton with a natural slub and a simple cream border. Soft after the first wash and only gets better with age.",
    image: "/products/DLL-302.svg",
  },
  {
    id: "DLL-401",
    name: "Slate Linen Office Saree",
    category: "office-wear",
    price: 2650,
    fabric: "Linen",
    color: "Slate Grey",
    blurb: "Understated linen for the working week.",
    details:
      "A slate-grey linen saree with a thin silver border — crisp, professional and comfortable through a full workday. Pairs with almost any blouse.",
    image: "/products/DLL-401.svg",
    featured: true,
  },
  {
    id: "DLL-402",
    name: "Sand Cotton-Silk Formal",
    category: "office-wear",
    price: 2950,
    fabric: "Cotton-Silk Blend",
    color: "Sand Beige",
    blurb: "Soft sheen, wrinkle-friendly, meeting-ready.",
    details:
      "A sand-beige cotton-silk blend with a subtle sheen and a maroon piping border. Resists wrinkles and drapes neatly — an easy formal choice.",
    image: "/products/DLL-402.svg",
  },
  {
    id: "DLL-501",
    name: "Maroon Temple Traditional",
    category: "traditional",
    price: 5400,
    fabric: "Art Silk",
    color: "Maroon & Gold",
    blurb: "Classic temple border with a peacock pallu.",
    details:
      "A maroon art-silk saree with a wide gold temple border and a woven peacock pallu — the classic South-Indian silhouette for festivals and family occasions.",
    image: "/products/DLL-501.svg",
    featured: true,
  },
  {
    id: "DLL-502",
    name: "Royal Blue Kanjivaram-style",
    category: "traditional",
    price: 6800,
    fabric: "Art Silk",
    color: "Royal Blue",
    blurb: "Contrast gold border with a grand pallu.",
    details:
      "A royal-blue art-silk saree in the Kanjivaram tradition, with a contrast gold border and a heavily woven pallu. Rich colour, festive presence.",
    image: "/products/DLL-502.svg",
  },
  {
    id: "DLL-601",
    name: "Crimson Bridal Banarasi",
    category: "wedding",
    price: 24500,
    fabric: "Pure Katan Silk",
    color: "Crimson Red",
    blurb: "The one for the big day — full zari body.",
    details:
      "A crimson pure-silk Banarasi with an all-over gold zari body, a grand pallu and a wide matching border. Designed to be the centre of the celebration. Includes a matching blouse piece.",
    image: "/products/DLL-601.svg",
    featured: true,
  },
  {
    id: "DLL-602",
    name: "Wine & Gold Reception Saree",
    category: "wedding",
    price: 19800,
    fabric: "Organza Silk",
    color: "Wine",
    blurb: "Sheer organza with sequin-zari detailing.",
    details:
      "A wine organza-silk saree with fine sequin and zari detailing — light, modern and made to move on a reception evening. Comes with a matching blouse piece.",
    image: "/products/DLL-602.svg",
  },
  {
    id: "DLL-701",
    name: "Rose Gift Saree",
    category: "giftings",
    price: 2900,
    fabric: "Soft Silk",
    color: "Rose Pink",
    blurb: "Ready to gift, wrapped with a handwritten note.",
    details:
      "A rose-pink soft-silk saree with a delicate gold border, arriving gift-wrapped with a handwritten note of your choosing. A thoughtful present for someone you love.",
    image: "/products/DLL-701.svg",
    featured: true,
  },
  {
    id: "DLL-702",
    name: "Pastel Gift Box Saree",
    category: "giftings",
    price: 3400,
    fabric: "Soft Silk",
    color: "Pastel Mint",
    blurb: "Presented in a keepsake gift box.",
    details:
      "A pastel-mint soft-silk saree with a silver border, presented in a reusable keepsake gift box. Elegant, easy to gift, and always the right size.",
    image: "/products/DLL-702.svg",
  },
];

// --- helpers used across the site (you don't need to edit these) ---

export function visibleProducts() {
  return PRODUCTS.filter((p) => !p.hidden);
}

export function featuredProducts() {
  return visibleProducts().filter((p) => p.featured);
}

export function productById(id) {
  return PRODUCTS.find((p) => p.id === id && !p.hidden) || null;
}

export function productsByCategory(slug) {
  return visibleProducts().filter((p) => p.category === slug);
}

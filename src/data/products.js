// ==================================================================
// YOUR SAREE CATALOGUE
// ------------------------------------------------------------------
// This is where you manage your shop. To add a saree, copy one block
// below, paste it, and change the details. To remove one, delete its
// block. To hide one, set  hidden: true.
//
// FIELDS FOR EACH SAREE:
//   id        – short unique code (also used as the image file name)
//   name      – the saree's name shown to customers
//   fabric    – one fabric slug: "silk" | "cotton" | "linen"
//   weave     – one weave slug that belongs to that fabric, e.g.
//               silk  -> banarasi | katan | modal | kesar | bangalori
//                        | bhagalpuri | tussar | organza
//               cotton-> handloom | khadi | malmal | jamdani | ikat | chanderi
//               linen -> pure-linen | linen-blend
//   occasions – one OR MORE: everyday | office-wear | festive-wear
//               | traditional | wedding | gifting
//   colors    – list of colours this saree comes in. ONE colour = a
//               single unique piece. MANY colours = customer picks one.
//               Each colour is { name, hex }.  (hex is just for the dot)
//   price     – number only, in rupees (no commas, no ₹)
//   blurb     – one short line shown on the card
//   details   – a fuller description for the product page
//   images    – list of photo paths. First one is the main photo.
//               Replace "/products/<id>.svg" with your real photo, e.g.
//               ["/products/DLL-101.jpg", "/products/DLL-101b.jpg"]
//   featured  – true to show it on the home page
//   hidden    – true to hide it from the shop
//
// (Fabric, weave and occasion names/slugs are all defined in
//  src/lib/constants.js — add or rename them there.)
// ==================================================================

export const PRODUCTS = [
  // ---------------- SILK ----------------
  {
    id: "DLL-101",
    name: "Rani Pink Katan Banarasi",
    fabric: "silk",
    weave: "katan",
    occasions: ["wedding", "festive-wear"],
    colors: [
      { name: "Rani Pink", hex: "#B03060" },
      { name: "Deep Wine", hex: "#7A1E3C" },
      { name: "Royal Blue", hex: "#26408B" },
    ],
    price: 12500,
    blurb: "Pure Katan silk with gold zari, in three regal colours.",
    details:
      "A pure Katan silk Banarasi woven on the handloom with gold zari butis across the body and a broad, richly patterned border. Available in Rani Pink, Deep Wine and Royal Blue — tell us your pick when you order. Comes with an unstitched matching blouse piece.",
    images: ["/products/DLL-101.svg"],
    featured: true,
  },
  {
    id: "DLL-102",
    name: "Ivory Kadwa Banarasi",
    fabric: "silk",
    weave: "banarasi",
    occasions: ["wedding", "traditional"],
    colors: [{ name: "Ivory & Gold", hex: "#EFE3D0" }],
    price: 15800,
    blurb: "Bridal-soft ivory with all-over meenakari — one unique piece.",
    details:
      "An ivory Katan silk Banarasi with delicate meenakari work in soft rose and gold. Light enough for long wear, grand enough for a wedding. A single unique piece. Includes a matching blouse piece.",
    images: ["/products/DLL-102.svg"],
    featured: true,
  },
  {
    id: "DLL-103",
    name: "Emerald Modal Silk",
    fabric: "silk",
    weave: "modal",
    occasions: ["festive-wear", "everyday"],
    colors: [
      { name: "Emerald", hex: "#1F5C46" },
      { name: "Teal", hex: "#1E6E6E" },
    ],
    price: 3600,
    blurb: "Feather-light modal silk with a luminous sheen.",
    details:
      "A modal silk saree with a subtle self-sheen and a fine contrast border. Incredibly light and easy to drape. Available in Emerald and Teal.",
    images: ["/products/DLL-103.svg"],
  },
  {
    id: "DLL-104",
    name: "Blush Modal Silk",
    fabric: "silk",
    weave: "modal",
    occasions: ["everyday", "office-wear", "gifting"],
    colors: [
      { name: "Blush Pink", hex: "#E9C3C8" },
      { name: "Sky Blue", hex: "#A9C7E0" },
      { name: "Sand", hex: "#CDB79A" },
    ],
    price: 3200,
    blurb: "Cloud-light everyday drape in three soft pastels.",
    details:
      "A soft modal silk saree with a natural sheen and a thin gold border — a favourite for long days. Available in Blush Pink, Sky Blue and Sand. Comes gift-ready if you'd like.",
    images: ["/products/DLL-104.svg"],
    featured: true,
  },
  {
    id: "DLL-105",
    name: "Golden Kesar Silk",
    fabric: "silk",
    weave: "kesar",
    occasions: ["festive-wear", "traditional"],
    colors: [{ name: "Golden Yellow", hex: "#D6A32E" }],
    price: 8900,
    blurb: "Warm golden silk with a woven temple border.",
    details:
      "A lustrous golden Kesar silk with a woven temple border and a richly patterned pallu — a festive classic. A single unique piece with a matching blouse piece.",
    images: ["/products/DLL-105.svg"],
  },
  {
    id: "DLL-106",
    name: "Wine Bangalori Silk",
    fabric: "silk",
    weave: "bangalori",
    occasions: ["festive-wear"],
    colors: [
      { name: "Wine", hex: "#6E1E3A" },
      { name: "Bottle Green", hex: "#1F4A32" },
    ],
    price: 4200,
    blurb: "Smooth Bangalori silk with a glossy fall.",
    details:
      "A smooth Bangalori silk saree with a glossy finish and a contrast zari border. Available in Wine and Bottle Green.",
    images: ["/products/DLL-106.svg"],
  },
  {
    id: "DLL-107",
    name: "Slate Bhagalpuri Silk",
    fabric: "silk",
    weave: "bhagalpuri",
    occasions: ["office-wear", "everyday"],
    colors: [
      { name: "Slate", hex: "#5B6470" },
      { name: "Mustard", hex: "#CF9A2A" },
    ],
    price: 3100,
    blurb: "Textured Bhagalpuri silk, light and easy to wear.",
    details:
      "A textured Bhagalpuri (tussar-style) silk with a subtle slub and a simple border — understated and comfortable. Available in Slate and Mustard.",
    images: ["/products/DLL-107.svg"],
  },
  {
    id: "DLL-108",
    name: "Natural Tussar Silk",
    fabric: "silk",
    weave: "tussar",
    occasions: ["traditional", "festive-wear", "gifting"],
    colors: [
      { name: "Natural Beige", hex: "#C9B08A" },
      { name: "Rust", hex: "#B5532A" },
    ],
    price: 5600,
    blurb: "Handwoven Tussar with its signature golden slub.",
    details:
      "A handwoven Tussar silk with its natural golden slub and a hand-painted border. Earthy, elegant and giftable. Available in Natural Beige and Rust.",
    images: ["/products/DLL-108.svg"],
  },
  {
    id: "DLL-109",
    name: "Wine Organza",
    fabric: "silk",
    weave: "organza",
    occasions: ["wedding", "festive-wear"],
    colors: [{ name: "Wine", hex: "#5A142C" }],
    price: 9800,
    blurb: "Sheer organza with sequin-zari detailing.",
    details:
      "A wine organza silk saree with fine sequin and zari detailing — light, modern and made to move on a reception evening. A single unique piece with a matching blouse piece.",
    images: ["/products/DLL-109.svg"],
  },

  // ---------------- COTTON ----------------
  {
    id: "DLL-201",
    name: "Mustard Handloom Cotton",
    fabric: "cotton",
    weave: "handloom",
    occasions: ["everyday", "office-wear"],
    colors: [
      { name: "Mustard", hex: "#CF9A2A" },
      { name: "Indigo", hex: "#2E3A73" },
      { name: "Maroon", hex: "#6E1E2E" },
    ],
    price: 1850,
    blurb: "Crisp everyday handloom with a temple border.",
    details:
      "A handloom cotton saree with a fine temple border and a striped pallu. Breathable and easy to maintain. Available in Mustard, Indigo and Maroon.",
    images: ["/products/DLL-201.svg"],
    featured: true,
  },
  {
    id: "DLL-202",
    name: "Teal Khadi Cotton",
    fabric: "cotton",
    weave: "khadi",
    occasions: ["everyday"],
    colors: [{ name: "Teal", hex: "#1E6E6E" }],
    price: 2100,
    blurb: "Handspun khadi with a natural slub texture.",
    details:
      "Handspun teal khadi cotton with a natural slub and a simple cream border. Soft after the first wash and only gets better with age. A single piece.",
    images: ["/products/DLL-202.svg"],
  },
  {
    id: "DLL-203",
    name: "White Malmal Cotton",
    fabric: "cotton",
    weave: "malmal",
    occasions: ["everyday", "office-wear"],
    colors: [
      { name: "White", hex: "#F0EBE2" },
      { name: "Powder Blue", hex: "#A9C7E0" },
    ],
    price: 1650,
    blurb: "Feather-soft mulmul cotton for hot days.",
    details:
      "A feather-soft Malmal (mulmul) cotton saree with a delicate printed border — the lightest thing for a hot afternoon. Available in White and Powder Blue.",
    images: ["/products/DLL-203.svg"],
  },
  {
    id: "DLL-204",
    name: "Indigo Jamdani",
    fabric: "cotton",
    weave: "jamdani",
    occasions: ["festive-wear", "traditional"],
    colors: [
      { name: "Indigo", hex: "#2E3A73" },
      { name: "Off-White", hex: "#EDE7DA" },
    ],
    price: 4800,
    blurb: "Handwoven Jamdani motifs floating on fine cotton.",
    details:
      "A handwoven Jamdani cotton with intricate motifs woven into the sheer body — a labour-intensive heritage craft. Available in Indigo and Off-White.",
    images: ["/products/DLL-204.svg"],
    featured: true,
  },
  {
    id: "DLL-205",
    name: "Rust Ikat Cotton",
    fabric: "cotton",
    weave: "ikat",
    occasions: ["everyday", "festive-wear"],
    colors: [
      { name: "Rust", hex: "#B5532A" },
      { name: "Teal", hex: "#1E6E6E" },
      { name: "Black", hex: "#2A2320" },
    ],
    price: 2600,
    blurb: "Bold Ikat patterns dyed into the yarn.",
    details:
      "A cotton Ikat saree where the pattern is dyed into the yarn before weaving, giving its signature soft-edged geometry. Available in Rust, Teal and Black.",
    images: ["/products/DLL-205.svg"],
  },
  {
    id: "DLL-206",
    name: "Peach Chanderi",
    fabric: "cotton",
    weave: "chanderi",
    occasions: ["festive-wear", "office-wear", "gifting"],
    colors: [
      { name: "Peach", hex: "#E7B79A" },
      { name: "Mint", hex: "#BFE3D0" },
      { name: "Lavender", hex: "#C9BCE0" },
    ],
    price: 3400,
    blurb: "Sheer Chanderi with a soft glow and light zari.",
    details:
      "A Chanderi saree with its characteristic sheer glow and fine zari border — dressy yet light. Available in Peach, Mint and Lavender. Giftable.",
    images: ["/products/DLL-206.svg"],
  },

  // ---------------- LINEN ----------------
  {
    id: "DLL-301",
    name: "Slate Pure Linen",
    fabric: "linen",
    weave: "pure-linen",
    occasions: ["office-wear", "everyday"],
    colors: [
      { name: "Slate Grey", hex: "#6B7480" },
      { name: "Sand", hex: "#CDB79A" },
      { name: "Powder Blue", hex: "#A9C7E0" },
    ],
    price: 2650,
    blurb: "Crisp pure linen with a fine silver border.",
    details:
      "A slate-grey pure linen saree with a thin silver border — crisp, professional and comfortable through a full workday. Available in Slate Grey, Sand and Powder Blue.",
    images: ["/products/DLL-301.svg"],
    featured: true,
  },
  {
    id: "DLL-302",
    name: "Sand Linen Blend",
    fabric: "linen",
    weave: "linen-blend",
    occasions: ["office-wear"],
    colors: [
      { name: "Sand Beige", hex: "#CDB79A" },
      { name: "Olive", hex: "#6E7A3A" },
    ],
    price: 2350,
    blurb: "Soft linen-blend that resists wrinkles.",
    details:
      "A sand-beige linen-blend with a subtle sheen and a maroon piping border. Resists wrinkles and drapes neatly — an easy formal choice. Available in Sand Beige and Olive.",
    images: ["/products/DLL-302.svg"],
  },

  // ---------------- CHIFFON ----------------
  {
    id: "DLL-801",
    name: "Blush Printed Chiffon",
    fabric: "chiffon",
    weave: "printed-chiffon",
    occasions: ["festive-wear", "everyday"],
    colors: [
      { name: "Blush Pink", hex: "#E9C3C8" },
      { name: "Powder Blue", hex: "#A9C7E0" },
      { name: "Mint", hex: "#BFE3D0" },
    ],
    price: 2200,
    blurb: "Floaty printed chiffon in soft pastels.",
    details:
      "A lightweight chiffon saree with a delicate floral print and a fine border — airy, elegant and easy to carry all evening. Available in Blush Pink, Powder Blue and Mint.",
    images: ["/products/DLL-801.svg"],
    featured: true,
  },
  {
    id: "DLL-802",
    name: "Wine Embroidered Chiffon",
    fabric: "chiffon",
    weave: "embroidered-chiffon",
    occasions: ["wedding", "festive-wear"],
    colors: [{ name: "Wine", hex: "#6E1E3A" }],
    price: 3800,
    blurb: "Sheer chiffon with fine thread embroidery.",
    details:
      "A wine chiffon saree with delicate thread-and-sequin embroidery along the border and pallu — a graceful choice for evening functions. A single unique piece with a matching blouse piece.",
    images: ["/products/DLL-802.svg"],
  },

  // ---------------- GEORGETTE ----------------
  {
    id: "DLL-901",
    name: "Coral Printed Georgette",
    fabric: "georgette",
    weave: "printed-georgette",
    occasions: ["everyday", "festive-wear"],
    colors: [
      { name: "Coral", hex: "#E2725B" },
      { name: "Teal", hex: "#1E6E6E" },
      { name: "Mustard", hex: "#CF9A2A" },
    ],
    price: 2400,
    blurb: "Crinkled georgette with a lively print.",
    details:
      "A soft georgette saree with a bright all-over print and a light border — comfortable, wrinkle-friendly and full of colour. Available in Coral, Teal and Mustard.",
    images: ["/products/DLL-901.svg"],
  },
  {
    id: "DLL-902",
    name: "Black Sequin Georgette",
    fabric: "georgette",
    weave: "sequin-georgette",
    occasions: ["wedding", "festive-wear"],
    colors: [{ name: "Black", hex: "#2A2320" }],
    price: 4200,
    blurb: "Party-ready georgette with all-over sequins.",
    details:
      "A black georgette saree with all-over sequin work that catches the light — made for receptions and parties. A single unique piece with a matching blouse piece.",
    images: ["/products/DLL-902.svg"],
    featured: true,
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
export function productsByFabric(fabricSlug) {
  return visibleProducts().filter((p) => p.fabric === fabricSlug);
}
export function productsByWeave(weaveSlug) {
  return visibleProducts().filter((p) => p.weave === weaveSlug);
}
export function productsByOccasion(occasionSlug) {
  return visibleProducts().filter((p) => (p.occasions || []).includes(occasionSlug));
}
// Combined filter — pass any of { fabric, weave, occasion }.
export function filterProducts({ fabric, weave, occasion } = {}) {
  return visibleProducts().filter((p) => {
    if (fabric && p.fabric !== fabric) return false;
    if (weave && p.weave !== weave) return false;
    if (occasion && !(p.occasions || []).includes(occasion)) return false;
    return true;
  });
}

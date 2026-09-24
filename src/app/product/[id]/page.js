import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BRAND, PAYMENT_NOTE, fabricName, weaveName, occasionName, waLink, mailLink,
} from "@/lib/constants";
import { productById, productsByWeave, productsByFabric } from "@/data/products";
import ProductCard, { formatPrice } from "@/components/ProductCard";

export function generateMetadata({ params }) {
  const p = productById(params.id);
  if (!p) return { title: "Saree not found" };
  const img = (p.images && p.images[0]) || p.image;
  return {
    title: p.name,
    description: p.blurb,
    openGraph: { title: p.name, description: p.blurb, images: img ? [img] : [] },
  };
}

export default function ProductPage({ params }) {
  const product = productById(params.id);
  if (!product) notFound();

  const colors = product.colors || [];
  const images = product.images && product.images.length ? product.images : [product.image];
  const occasions = product.occasions || [];

  // Related: prefer same weave, then top up with same fabric.
  const sameWeave = productsByWeave(product.weave).filter((p) => p.id !== product.id);
  const sameFabric = productsByFabric(product.fabric).filter(
    (p) => p.id !== product.id && !sameWeave.some((s) => s.id === p.id)
  );
  const related = [...sameWeave, ...sameFabric].slice(0, 4);

  // Pre-filled order message (mentions colours if there's a choice).
  const colourLine =
    colors.length > 1
      ? `• Colour: (please tell us — available in ${colors.map((c) => c.name).join(", ")})\n`
      : colors.length === 1
      ? `• Colour: ${colors[0].name}\n`
      : "";
  const orderText =
    `Hello ${BRAND.name}!\n\n` +
    `I'd like to order this saree:\n` +
    `• ${product.name} (${weaveName(product.weave)})\n` +
    `• Code: ${product.id}\n` +
    colourLine +
    `• Price: ${formatPrice(product.price)}\n\n` +
    `Is it available? Please share prepaid payment details.`;

  return (
    <section className="container-max py-10">
      {/* breadcrumb */}
      <nav className="mb-8 text-sm text-muted">
        <Link href="/" className="link-underline">Home</Link>
        <span className="px-2">/</span>
        <Link href={`/collections?fabric=${product.fabric}`} className="link-underline">
          {fabricName(product.fabric)}
        </Link>
        <span className="px-2">/</span>
        <Link href={`/collections?fabric=${product.fabric}&weave=${product.weave}`} className="link-underline">
          {weaveName(product.weave)}
        </Link>
        <span className="px-2">/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* images */}
        <div>
          <div className="overflow-hidden rounded-3xl border border-line bg-cream">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={images[0]} alt={product.name} className="aspect-[3/4] w-full object-cover" />
          </div>
          {images.length > 1 && (
            <div className="mt-3 grid grid-cols-4 gap-3">
              {images.slice(0, 4).map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={src} alt={`${product.name} view ${i + 1}`}
                     className="aspect-square w-full rounded-xl border border-line object-cover" />
              ))}
            </div>
          )}
        </div>

        {/* details */}
        <div>
          <p className="eyebrow">{fabricName(product.fabric)} · {weaveName(product.weave)}</p>
          <h1 className="mt-2 font-display text-4xl leading-tight text-ink">{product.name}</h1>
          <p className="mt-4 text-2xl font-medium text-wine">{formatPrice(product.price)}</p>

          {/* colours */}
          {colors.length > 0 && (
            <div className="mt-6">
              <p className="text-sm font-medium text-ink">
                {colors.length > 1 ? `Available in ${colors.length} colours` : "Colour"}
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                {colors.map((c) => (
                  <span key={c.name} className="flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-sm">
                    <span className="h-4 w-4 rounded-full border border-line" style={{ backgroundColor: c.hex }} />
                    {c.name}
                  </span>
                ))}
              </div>
              {colors.length > 1 && (
                <p className="mt-2 text-xs text-muted">Tell us your preferred colour when you order.</p>
              )}
            </div>
          )}

          {/* details grid */}
          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-line bg-white p-4">
              <dt className="text-muted">Fabric</dt>
              <dd className="mt-1 font-medium text-ink">{fabricName(product.fabric)}</dd>
            </div>
            <div className="rounded-xl border border-line bg-white p-4">
              <dt className="text-muted">Weave</dt>
              <dd className="mt-1 font-medium text-ink">{weaveName(product.weave)}</dd>
            </div>
            <div className="rounded-xl border border-line bg-white p-4">
              <dt className="text-muted">Saree code</dt>
              <dd className="mt-1 font-medium text-ink">{product.id}</dd>
            </div>
            <div className="rounded-xl border border-line bg-white p-4">
              <dt className="text-muted">Shipping</dt>
              <dd className="mt-1 font-medium text-ink">Free across India</dd>
            </div>
          </dl>

          {/* occasions */}
          {occasions.length > 0 && (
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted">Good for:</span>
              {occasions.map((o) => (
                <Link key={o} href={`/collections?occasion=${o}`}
                      className="rounded-full bg-cream px-3 py-1 text-xs text-wine hover:bg-gold-pale">
                  {occasionName(o)}
                </Link>
              ))}
            </div>
          )}

          <p className="mt-6 leading-relaxed text-ink/90">{product.details}</p>

          {/* order buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waLink(orderText)} target="_blank" rel="noopener noreferrer" className="btn-wa flex-1 sm:flex-none">
              Buy on WhatsApp
            </a>
            <a href={mailLink(`Order — ${product.name} (${product.id})`, orderText)} className="btn-outline flex-1 sm:flex-none">
              Order by email
            </a>
          </div>

          <div className="mt-5 rounded-xl bg-gold-pale/60 p-4 text-sm leading-relaxed text-ink/80">
            {PAYMENT_NOTE}
          </div>
        </div>
      </div>

      {/* related */}
      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-display text-2xl text-ink">You may also like</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

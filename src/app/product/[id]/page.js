import Link from "next/link";
import { notFound } from "next/navigation";
import { BRAND, PAYMENT_NOTE, categoryName, waLink, mailLink } from "@/lib/constants";
import { productById, productsByCategory } from "@/data/products";
import ProductCard, { formatPrice } from "@/components/ProductCard";

export function generateMetadata({ params }) {
  const p = productById(params.id);
  if (!p) return { title: "Saree not found" };
  return {
    title: p.name,
    description: p.blurb,
    openGraph: { title: p.name, description: p.blurb, images: [p.image] },
  };
}

export default function ProductPage({ params }) {
  const product = productById(params.id);
  if (!product) notFound();

  const related = productsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const orderText =
    `Hello ${BRAND.name}!\n\n` +
    `I'd like to order this saree:\n` +
    `• ${product.name} (${categoryName(product.category)})\n` +
    `• Code: ${product.id}\n` +
    `• Price: ${formatPrice(product.price)}\n\n` +
    `Is it available? Please share prepaid payment details.`;

  return (
    <section className="container-max py-10">
      {/* breadcrumb */}
      <nav className="mb-8 text-sm text-muted">
        <Link href="/" className="link-underline">Home</Link>
        <span className="px-2">/</span>
        <Link href={`/collections?category=${product.category}`} className="link-underline">
          {categoryName(product.category)}
        </Link>
        <span className="px-2">/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* image */}
        <div className="overflow-hidden rounded-3xl border border-line bg-cream">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className="aspect-[3/4] w-full object-cover"
          />
        </div>

        {/* details */}
        <div>
          <p className="eyebrow">{categoryName(product.category)}</p>
          <h1 className="mt-2 font-display text-4xl leading-tight text-ink">{product.name}</h1>
          <p className="mt-4 text-2xl font-medium text-wine">{formatPrice(product.price)}</p>

          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-line bg-white p-4">
              <dt className="text-muted">Fabric</dt>
              <dd className="mt-1 font-medium text-ink">{product.fabric}</dd>
            </div>
            <div className="rounded-xl border border-line bg-white p-4">
              <dt className="text-muted">Colour</dt>
              <dd className="mt-1 font-medium text-ink">{product.color}</dd>
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

          <p className="mt-6 leading-relaxed text-ink/90">{product.details}</p>

          {/* order buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink(orderText)}
              target="_blank" rel="noopener noreferrer"
              className="btn-wa flex-1 sm:flex-none"
            >
              Buy on WhatsApp
            </a>
            <a
              href={mailLink(`Order — ${product.name} (${product.id})`, orderText)}
              className="btn-outline flex-1 sm:flex-none"
            >
              Order by email
            </a>
          </div>

          <div className="mt-5 rounded-xl bg-gold-pale/60 p-4 text-sm leading-relaxed text-ink/80">
            {PAYMENT_NOTE}
          </div>

          <p className="mt-4 text-sm text-muted">
            Questions about the drape, blouse or delivery? Message us on WhatsApp
            {" "}<span className="text-wine">{BRAND.phoneDisplay}</span> — we reply personally.
          </p>
        </div>
      </div>

      {/* related */}
      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-display text-2xl text-ink">More in {categoryName(product.category)}</h2>
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

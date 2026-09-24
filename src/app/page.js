import Link from "next/link";
import { BRAND, CATEGORIES, waLink } from "@/lib/constants";
import { featuredProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const featured = featuredProducts().slice(0, 8);

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden">
        <div className="container-max grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <p className="eyebrow">Handloom saree atelier</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              Sarees woven to be
              <span className="block text-wine">worn and remembered</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              From Banarasi silk to everyday cotton — a small, carefully chosen
              collection for the ordinary days and the once-in-a-lifetime ones.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/collections" className="btn-primary">Explore the collection</Link>
              <a
                href={waLink(`Hello ${BRAND.name}! I'd like to see your latest sarees.`)}
                target="_blank" rel="noopener noreferrer"
                className="btn-wa"
              >
                Order on WhatsApp
              </a>
            </div>
            <p className="mt-6 text-sm text-muted">
              Free shipping across India · <span className="text-wine">All orders prepaid</span>
            </p>
          </div>

          {/* image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="/products/DLL-601.svg" alt="Bridal Banarasi saree" className="aspect-[3/4] w-full rounded-2xl object-cover shadow-card" />
              <img src="/products/DLL-201.svg" alt="Modal silk saree" className="mt-8 aspect-[3/4] w-full rounded-2xl object-cover shadow-card" />
              <img src="/products/DLL-501.svg" alt="Traditional silk saree" className="-mt-4 aspect-[3/4] w-full rounded-2xl object-cover shadow-card" />
              <img src="/products/DLL-101.svg" alt="Banarasi silk saree" className="mt-4 aspect-[3/4] w-full rounded-2xl object-cover shadow-card" />
            </div>
            <div className="pointer-events-none absolute -bottom-6 -left-6 hidden rounded-2xl border border-gold/40 bg-ivory/80 px-5 py-4 shadow-soft backdrop-blur sm:block">
              <p className="font-display text-2xl text-wine">7 weaves</p>
              <p className="text-xs tracking-wide text-muted">silk · cotton · gifting & more</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CATEGORIES ---------------- */}
      <section className="container-max py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Browse by weave</p>
            <h2 className="mt-2 font-display text-3xl text-ink">Our collections</h2>
          </div>
          <Link href="/collections" className="hidden text-sm text-wine link-underline sm:inline">
            See everything
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/collections?category=${c.slug}`}
              className="group card flex flex-col justify-between p-5 transition hover:shadow-soft"
            >
              <div>
                <h3 className="font-display text-xl text-wine">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.blurb}</p>
              </div>
              <span className="mt-6 text-sm text-gold">Shop {c.name} →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------------- FEATURED ---------------- */}
      <section className="container-max py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Freshly on the loom</p>
            <h2 className="mt-2 font-display text-3xl text-ink">Featured sarees</h2>
          </div>
          <Link href="/collections" className="hidden text-sm text-wine link-underline sm:inline">
            View all
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ---------------- HOW TO ORDER ---------------- */}
      <section className="mt-10 bg-cream">
        <div className="container-max py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Simple &amp; personal</p>
            <h2 className="mt-2 font-display text-3xl text-ink">How to order</h2>
            <p className="mt-3 text-muted">
              No complicated checkout — you talk to a real person, and every order is prepaid.
            </p>
          </div>
          <ol className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
            {[
              { n: "1", t: "Pick your saree", d: "Browse the collection and note the saree name or code." },
              { n: "2", t: "Message us", d: `Send it on WhatsApp (${BRAND.phoneDisplay}) or email. We confirm availability.` },
              { n: "3", t: "Pay & receive", d: "We share secure prepaid payment details, then ship it to your door." },
            ].map((s) => (
              <li key={s.n} className="card p-6 text-center">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-wine font-display text-lg text-ivory">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-lg text-ink">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <a
              href={waLink(`Hello ${BRAND.name}! I'd like to place an order.`)}
              target="_blank" rel="noopener noreferrer"
              className="btn-wa"
            >
              Start your order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- WHY US ---------------- */}
      <section className="container-max grid gap-8 py-16 md:grid-cols-3">
        {[
          { t: "Handpicked weaves", d: "A small collection, chosen one saree at a time — no mass-market bulk." },
          { t: "Honest pricing", d: "Fair prices for genuine handloom, straight from weaving clusters." },
          { t: "Cared-for delivery", d: "Neatly packed, prepaid, and shipped free across India with tracking." },
        ].map((f) => (
          <div key={f.t} className="border-t-2 border-gold pt-5">
            <h3 className="font-display text-xl text-ink">{f.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.d}</p>
          </div>
        ))}
      </section>
    </>
  );
}

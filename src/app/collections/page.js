import Link from "next/link";
import { CATEGORIES, categoryName } from "@/lib/constants";
import { visibleProducts, productsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Shop Sarees",
  description: "Browse handwoven Banarasi silk, modal silk, cotton, office wear, traditional, wedding and gifting sarees.",
};

export default function CollectionsPage({ searchParams }) {
  const active = searchParams?.category || "";
  const products = active ? productsByCategory(active) : visibleProducts();

  return (
    <section className="container-max py-12">
      <p className="eyebrow">The collection</p>
      <h1 className="mt-2 font-display text-4xl text-ink">
        {active ? categoryName(active) : "All sarees"}
      </h1>
      <p className="mt-3 max-w-xl text-muted">
        {active
          ? CATEGORIES.find((c) => c.slug === active)?.blurb
          : "Every saree we currently have on the loom and in stock."}
      </p>

      {/* filter chips */}
      <div className="mt-8 flex flex-wrap gap-2">
        <FilterChip href="/collections" label="All" active={!active} />
        {CATEGORIES.map((c) => (
          <FilterChip
            key={c.slug}
            href={`/collections?category=${c.slug}`}
            label={c.name}
            active={active === c.slug}
          />
        ))}
      </div>

      {/* grid */}
      {products.length > 0 ? (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="mt-16 rounded-2xl border border-dashed border-line p-12 text-center">
          <h3 className="font-display text-xl text-ink">No sarees here yet</h3>
          <p className="mt-2 text-muted">
            New pieces are added often — check back soon, or{" "}
            <Link href="/collections" className="text-wine link-underline">see all sarees</Link>.
          </p>
        </div>
      )}
    </section>
  );
}

function FilterChip({ href, label, active }) {
  return (
    <Link
      href={href}
      className={
        "rounded-full border px-4 py-2 text-sm transition " +
        (active
          ? "border-wine bg-wine text-ivory"
          : "border-line bg-white text-ink hover:border-wine hover:text-wine")
      }
    >
      {label}
    </Link>
  );
}

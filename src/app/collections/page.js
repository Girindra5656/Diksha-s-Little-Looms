import Link from "next/link";
import {
  FABRICS, OCCASIONS, fabricBySlug, fabricName, weaveName, occasionName,
} from "@/lib/constants";
import { filterProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Shop Sarees",
  description:
    "Browse handwoven sarees by fabric (silk, cotton, linen) and weave, or by occasion — wedding, festive, office, everyday, traditional and gifting.",
};

// Build a /collections URL from a set of filters (drops empty ones).
function href({ fabric, weave, occasion }) {
  const p = new URLSearchParams();
  if (fabric) p.set("fabric", fabric);
  if (weave) p.set("weave", weave);
  if (occasion) p.set("occasion", occasion);
  const q = p.toString();
  return q ? `/collections?${q}` : "/collections";
}

function Chip({ to, label, active }) {
  return (
    <Link
      href={to}
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

export default function CollectionsPage({ searchParams }) {
  const fabric = searchParams?.fabric || "";
  const weave = searchParams?.weave || "";
  const occasion = searchParams?.occasion || "";

  const products = filterProducts({ fabric, weave, occasion });
  const activeFabric = fabricBySlug(fabric);

  // Build a readable heading from the active filters.
  const parts = [];
  if (weave) parts.push(weaveName(weave));
  else if (fabric) parts.push(fabricName(fabric));
  if (occasion) parts.push(occasionName(occasion));
  const heading = parts.length ? parts.join(" · ") : "All sarees";

  return (
    <section className="container-max py-12">
      <p className="eyebrow">The collection</p>
      <h1 className="mt-2 font-display text-4xl text-ink">{heading}</h1>
      <p className="mt-3 max-w-xl text-muted">
        {products.length} {products.length === 1 ? "saree" : "sarees"} available.
        Pick a fabric, weave or occasion below.
      </p>

      {/* Fabric filter */}
      <div className="mt-8">
        <p className="mb-2 text-sm font-medium text-ink">Fabric</p>
        <div className="flex flex-wrap gap-2">
          <Chip to={href({ occasion })} label="All fabrics" active={!fabric} />
          {FABRICS.map((f) => (
            <Chip
              key={f.slug}
              to={href({ fabric: f.slug, occasion })}
              label={f.name}
              active={fabric === f.slug}
            />
          ))}
        </div>
      </div>

      {/* Weave filter (only when a fabric is chosen) */}
      {activeFabric && (
        <div className="mt-5">
          <p className="mb-2 text-sm font-medium text-ink">{activeFabric.name} weaves</p>
          <div className="flex flex-wrap gap-2">
            <Chip to={href({ fabric, occasion })} label={`All ${activeFabric.name}`} active={!weave} />
            {activeFabric.weaves.map((w) => (
              <Chip
                key={w.slug}
                to={href({ fabric, weave: w.slug, occasion })}
                label={w.name}
                active={weave === w.slug}
              />
            ))}
          </div>
        </div>
      )}

      {/* Occasion filter */}
      <div className="mt-5">
        <p className="mb-2 text-sm font-medium text-ink">Occasion</p>
        <div className="flex flex-wrap gap-2">
          <Chip to={href({ fabric, weave })} label="Any occasion" active={!occasion} />
          {OCCASIONS.map((o) => (
            <Chip
              key={o.slug}
              to={href({ fabric, weave, occasion: o.slug })}
              label={o.name}
              active={occasion === o.slug}
            />
          ))}
        </div>
      </div>

      {/* Grid */}
      {products.length > 0 ? (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-2xl border border-dashed border-line p-12 text-center">
          <h3 className="font-display text-xl text-ink">No sarees match those filters</h3>
          <p className="mt-2 text-muted">
            Try a different combination, or{" "}
            <Link href="/collections" className="text-wine link-underline">see all sarees</Link>.
          </p>
        </div>
      )}
    </section>
  );
}

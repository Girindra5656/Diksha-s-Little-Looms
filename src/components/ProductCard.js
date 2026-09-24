import Link from "next/link";
import { categoryName } from "@/lib/constants";

export function formatPrice(n) {
  return "₹" + Number(n).toLocaleString("en-IN");
}

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group card overflow-hidden transition hover:shadow-soft"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-cream">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-ivory/95 px-3 py-1 text-[11px] tracking-wide text-wine">
          {categoryName(product.category)}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg leading-snug text-ink">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted">{product.blurb}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-medium text-wine">{formatPrice(product.price)}</span>
          <span className="text-sm text-gold transition group-hover:translate-x-0.5">
            View saree
          </span>
        </div>
      </div>
    </Link>
  );
}

import Link from "next/link";
import { BRAND, CATEGORIES, waLink, mailLink } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-wine text-ivory">
      <div className="container-max grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <img src="/logo.svg" alt="" className="h-9 w-9 rounded-full bg-ivory p-0.5" />
            <span className="font-display text-xl">{BRAND.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/80">
            {BRAND.tagline}. Woven with care, shipped across India.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-wide2 text-gold-soft">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm text-ivory/85">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/collections?category=${c.slug}`} className="link-underline">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-wide2 text-gold-soft">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-ivory/85">
            <li><Link href="/about" className="link-underline">About us</Link></li>
            <li><Link href="/contact" className="link-underline">Contact</Link></li>
            <li><Link href="/collections" className="link-underline">All sarees</Link></li>
            <li><Link href="/signup" className="link-underline">Create account</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-wide2 text-gold-soft">Order & help</h4>
          <ul className="mt-4 space-y-2 text-sm text-ivory/85">
            <li>
              <a href={waLink("Hello Diksha's Little Looms! I have a question about your sarees.")}
                 target="_blank" rel="noopener noreferrer" className="link-underline">
                WhatsApp {BRAND.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={mailLink("Enquiry — Diksha's Little Looms", "")} className="link-underline break-all">
                {BRAND.email}
              </a>
            </li>
          </ul>
          <p className="mt-4 rounded-lg bg-ivory/10 p-3 text-xs leading-relaxed text-ivory/80">
            All orders are prepaid. Confirm your saree on WhatsApp or email and we’ll share secure payment details.
          </p>
        </div>
      </div>

      <div className="border-t border-ivory/15">
        <div className="container-max flex flex-col items-center justify-between gap-2 py-5 text-xs text-ivory/70 sm:flex-row">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p>Handwoven in India.</p>
        </div>
      </div>
    </footer>
  );
}

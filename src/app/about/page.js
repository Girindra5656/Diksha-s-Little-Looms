import Link from "next/link";
import { BRAND, waLink } from "@/lib/constants";

export const metadata = {
  title: "About",
  description: `The story behind ${BRAND.name} — a small handloom saree atelier.`,
};

export default function AboutPage() {
  return (
    <section className="container-max py-14">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Our story</p>
        <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
          A little loom, a lot of love
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/90">
          <p>
            {BRAND.name} began with a simple belief: a saree is not just cloth,
            it is memory you can wear. We work with weavers to bring you a small,
            honest collection — pieces we would be proud to wear ourselves and
            gift to the people we love.
          </p>
          <p>
            We keep our range deliberately small. Every saree — whether a grand
            Banarasi for a wedding or a soft cotton for a Tuesday — is chosen one
            at a time, for its weave, its fall and its colour. No bulk, no
            mass-market shortcuts.
          </p>
          <p>
            Because we are small, we can be personal. When you message us, you
            talk to a real person who knows the saree you are asking about. We
            help you choose, we pack it with care, and we ship it to your door.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { t: "Genuine handloom", d: "Sourced from weaving clusters, not warehouses." },
            { t: "Fair prices", d: "Honest pricing for real craftsmanship." },
            { t: "Personal service", d: "A real person on WhatsApp, every time." },
          ].map((v) => (
            <div key={v.t} className="border-t-2 border-gold pt-4">
              <h3 className="font-display text-lg text-wine">{v.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/collections" className="btn-primary">Explore the collection</Link>
          <a
            href={waLink(`Hello ${BRAND.name}! I'd love to know more about you.`)}
            target="_blank" rel="noopener noreferrer"
            className="btn-outline"
          >
            Say hello on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

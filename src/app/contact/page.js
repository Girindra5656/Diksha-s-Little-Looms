import { BRAND, PAYMENT_NOTE, waLink, mailLink } from "@/lib/constants";

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${BRAND.name} on WhatsApp or email to order sarees.`,
};

export default function ContactPage() {
  return (
    <section className="container-max py-14">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow">Get in touch</p>
        <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
          We’d love to help you choose
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          Tell us the occasion, the colours you love, or the saree code you have
          in mind. We reply personally and help you order — every order is prepaid.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {/* WhatsApp */}
          <a
            href={waLink(`Hello ${BRAND.name}! I'd like to enquire about a saree.`)}
            target="_blank" rel="noopener noreferrer"
            className="group card flex flex-col p-6 transition hover:shadow-soft"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1FA855]/10 text-[#1FA855]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Z"/>
              </svg>
            </span>
            <h2 className="mt-4 font-display text-xl text-ink">WhatsApp</h2>
            <p className="mt-1 text-sm text-muted">Fastest way to reach us — usually a quick reply.</p>
            <p className="mt-4 font-medium text-wine">{BRAND.phoneDisplay}</p>
            <span className="mt-1 text-sm text-gold group-hover:translate-x-0.5">Open chat →</span>
          </a>

          {/* Email */}
          <a
            href={mailLink(`Enquiry — ${BRAND.name}`, "Hello,\n\nI'd like to enquire about a saree.\n\n")}
            className="group card flex flex-col p-6 transition hover:shadow-soft"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-wine/10 text-wine">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </span>
            <h2 className="mt-4 font-display text-xl text-ink">Email</h2>
            <p className="mt-1 text-sm text-muted">Prefer writing? Send us the details and we’ll respond.</p>
            <p className="mt-4 break-all font-medium text-wine">{BRAND.email}</p>
            <span className="mt-1 text-sm text-gold group-hover:translate-x-0.5">Compose email →</span>
          </a>
        </div>

        <div className="mt-8 rounded-2xl border border-gold/40 bg-gold-pale/50 p-6">
          <h3 className="font-display text-lg text-ink">Ordering &amp; payment</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/80">{PAYMENT_NOTE}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink/80">
            Shipping is free across India, and every parcel is sent with tracking.
          </p>
        </div>
      </div>
    </section>
  );
}

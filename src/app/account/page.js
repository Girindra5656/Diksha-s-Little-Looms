import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { BRAND, waLink } from "@/lib/constants";
import LogoutButton from "@/components/LogoutButton";

export const metadata = { title: "My account" };
export const dynamic = "force-dynamic";

export default async function AccountPage() {
  const user = await getSession();
  if (!user) redirect("/login");

  return (
    <section className="container-max py-14">
      <div className="mx-auto max-w-2xl">
        <p className="eyebrow">My account</p>
        <h1 className="mt-2 font-display text-4xl text-ink">
          Hello, {user.name?.split(" ")[0] || "there"}
        </h1>

        <div className="mt-8 card p-6">
          <dl className="grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-muted">Name</dt>
              <dd className="mt-1 font-medium text-ink">{user.name}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Email</dt>
              <dd className="mt-1 break-all font-medium text-ink">{user.email}</dd>
            </div>
          </dl>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/collections" className="btn-primary">Continue shopping</Link>
            <LogoutButton />
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-gold/40 bg-gold-pale/50 p-6 text-sm leading-relaxed text-ink/80">
          <p className="font-medium text-ink">Ready to order?</p>
          <p className="mt-1">
            Pick your saree, then message us on WhatsApp{" "}
            <a
              href={waLink(`Hello ${BRAND.name}! This is ${user.name}. I'd like to place an order.`)}
              target="_blank" rel="noopener noreferrer"
              className="text-wine link-underline"
            >
              {BRAND.phoneDisplay}
            </a>{" "}
            to confirm availability and prepaid payment. All orders are prepaid.
          </p>
        </div>

        {user.role === "admin" && (
          <div className="mt-6">
            <Link href="/admin" className="text-wine link-underline">
              → Go to the admin dashboard
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

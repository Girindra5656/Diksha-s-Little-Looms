import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES, categoryName } from "@/lib/constants";
import { formatPrice } from "@/components/ProductCard";
import LogoutButton from "@/components/LogoutButton";

export const metadata = { title: "Admin dashboard" };
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const user = await getSession();
  if (!user) redirect("/admin/login");
  if (user.role !== "admin") redirect("/account");

  // Load registered customers. Wrapped so the page still renders with a
  // helpful message if the database isn't set up yet.
  let users = [];
  let dbError = null;
  try {
    users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    });
  } catch (e) {
    dbError = "Could not load users — check your DATABASE_URL and run the migration (see README).";
  }

  const visible = PRODUCTS.filter((p) => !p.hidden).length;
  const hidden = PRODUCTS.length - visible;

  return (
    <section className="container-max py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="eyebrow">Admin dashboard</p>
          <h1 className="mt-2 font-display text-4xl text-ink">Manage your shop</h1>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/" className="btn-outline px-4 py-2 text-sm">View site</Link>
          <LogoutButton className="btn-primary px-4 py-2 text-sm" />
        </div>
      </div>

      {/* stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-4">
        <Stat label="Sarees live" value={visible} />
        <Stat label="Sarees hidden" value={hidden} />
        <Stat label="Categories" value={CATEGORIES.length} />
        <Stat label="Registered users" value={dbError ? "—" : users.length} />
      </div>

      {/* how to manage products */}
      <div className="mt-10 rounded-2xl border border-gold/40 bg-gold-pale/40 p-6">
        <h2 className="font-display text-xl text-ink">Add or edit sarees</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink/80">
          Your saree list lives in the file{" "}
          <code className="rounded bg-white px-1.5 py-0.5 text-wine">src/data/products.js</code>.
          To add a saree, copy one block, change the details, add its photo to{" "}
          <code className="rounded bg-white px-1.5 py-0.5 text-wine">public/products/</code>,
          then save and redeploy. Full step-by-step instructions are in the{" "}
          <code className="rounded bg-white px-1.5 py-0.5 text-wine">README.md</code> file.
        </p>
      </div>

      {/* products table */}
      <div className="mt-8">
        <h2 className="font-display text-2xl text-ink">Your sarees</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-cream text-ink">
              <tr>
                <Th>Code</Th><Th>Name</Th><Th>Category</Th><Th>Price</Th><Th>Status</Th>
              </tr>
            </thead>
            <tbody>
              {PRODUCTS.map((p) => (
                <tr key={p.id} className="border-t border-line">
                  <Td className="font-mono text-xs">{p.id}</Td>
                  <Td className="font-medium text-ink">{p.name}</Td>
                  <Td>{categoryName(p.category)}</Td>
                  <Td>{formatPrice(p.price)}</Td>
                  <Td>
                    {p.hidden ? (
                      <span className="rounded-full bg-muted/15 px-2.5 py-1 text-xs text-muted">Hidden</span>
                    ) : (
                      <span className="rounded-full bg-[#1FA855]/12 px-2.5 py-1 text-xs text-[#1FA855]">Live</span>
                    )}
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* users table */}
      <div className="mt-12">
        <h2 className="font-display text-2xl text-ink">Registered users</h2>
        {dbError ? (
          <p className="mt-4 rounded-xl bg-wine/10 px-4 py-3 text-sm text-wine">{dbError}</p>
        ) : users.length === 0 ? (
          <p className="mt-4 text-sm text-muted">No one has signed up yet.</p>
        ) : (
          <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-cream text-ink">
                <tr><Th>Name</Th><Th>Email</Th><Th>Role</Th><Th>Joined</Th></tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-t border-line">
                    <Td className="font-medium text-ink">{u.name}</Td>
                    <Td className="break-all">{u.email}</Td>
                    <Td>
                      <span className={
                        "rounded-full px-2.5 py-1 text-xs " +
                        (u.role === "admin" ? "bg-wine/12 text-wine" : "bg-muted/15 text-muted")
                      }>
                        {u.role}
                      </span>
                    </Td>
                    <Td>{new Date(u.createdAt).toLocaleDateString("en-IN")}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="card p-5">
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-1 font-display text-3xl text-wine">{value}</p>
    </div>
  );
}
function Th({ children }) {
  return <th className="px-4 py-3 font-medium">{children}</th>;
}
function Td({ children, className = "" }) {
  return <td className={"px-4 py-3 text-ink/90 " + className}>{children}</td>;
}

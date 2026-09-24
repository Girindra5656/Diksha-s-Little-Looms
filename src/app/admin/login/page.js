import AuthForm from "@/components/AuthForm";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = { title: "Admin sign in" };
export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  const user = await getSession();
  if (user?.role === "admin") redirect("/admin");

  return (
    <section className="container-max py-16">
      <div className="mx-auto mb-4 w-full max-w-md text-center">
        <p className="eyebrow">Admin area</p>
        <p className="mt-2 text-sm text-muted">
          Sign in with your admin email and password to manage the shop.
        </p>
      </div>
      <AuthForm mode="login" />
    </section>
  );
}

import AuthForm from "@/components/AuthForm";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = { title: "Sign in" };
export const dynamic = "force-dynamic";

export default async function LoginPage() {
  const user = await getSession();
  if (user) redirect(user.role === "admin" ? "/admin" : "/account");
  return (
    <section className="container-max py-16">
      <AuthForm mode="login" />
    </section>
  );
}

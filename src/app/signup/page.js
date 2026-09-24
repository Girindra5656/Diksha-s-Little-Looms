import AuthForm from "@/components/AuthForm";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = { title: "Create account" };
export const dynamic = "force-dynamic";

export default async function SignupPage() {
  const user = await getSession();
  if (user) redirect(user.role === "admin" ? "/admin" : "/account");
  return (
    <section className="container-max py-16">
      <AuthForm mode="signup" />
    </section>
  );
}

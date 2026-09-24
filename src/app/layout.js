import "./globals.css";
import { BRAND } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { getSession } from "@/lib/auth";

export const metadata = {
  title: {
    default: `${BRAND.name} — Handwoven Sarees`,
    template: `%s · ${BRAND.name}`,
  },
  description:
    "Handwoven Banarasi silk, modal silk, cotton, office wear, traditional, wedding and gifting sarees. Order on WhatsApp — all orders prepaid.",
  keywords: [
    "sarees", "Banarasi silk", "modal silk", "cotton saree",
    "wedding saree", "handloom", BRAND.name,
  ],
  openGraph: {
    title: `${BRAND.name} — Handwoven Sarees`,
    description: "Handwoven sarees for everyday and celebration. Order on WhatsApp.",
    type: "website",
  },
};

export default async function RootLayout({ children }) {
  const user = await getSession();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body>
        <Navbar user={user} />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

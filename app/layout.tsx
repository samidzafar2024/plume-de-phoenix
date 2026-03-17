import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Plume de Phoenix \u2014 Ma\u00eetre Sw\u00e9ta Pannagas | Avocate sp\u00e9cialiste dommage corporel",
  description:
    "Ma\u00eetre Sw\u00e9ta Pannagas, avocate sp\u00e9cialiste en dommage corporel (titre CNB). Victimes d\u2019accidents graves, traumatismes cr\u00e2niens, b\u00e9b\u00e9 secou\u00e9, grands br\u00fbl\u00e9s, infractions. Enghien-les-Bains & Paris.",
  openGraph: {
    title: "Plume de Phoenix \u2014 Avocate sp\u00e9cialiste dommage corporel",
    description: "D\u00e9fense exclusive des victimes d\u2019accidents et d\u2019infractions. Consultation gratuite.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

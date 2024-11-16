import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "", default: "Site Arj", template: "%s | site arj" },
  description: "learning next js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

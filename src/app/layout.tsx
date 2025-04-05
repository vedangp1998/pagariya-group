import ThemeRegistry from "./ThemeRegistry";
import "./globals.css";
import type { Metadata } from "next";

import Footer from "./components/Footer";
import { Roboto, Poppins, Raleway } from "next/font/google";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Utex Industries",
  description: "Pagariya Group",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-raleway",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${poppins.variable} ${raleway.variable}`}
    >
      <body>
        <ThemeRegistry>
          <Header />
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}

import ThemeRegistry from "./ThemeRegistry";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Navbar />
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}

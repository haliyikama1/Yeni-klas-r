import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Header";
import Footer from "@/components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Özer Hafriyat | İstanbul Hafriyat Hizmeti",
  description: "İstanbul hafriyat hizmetlerinizin tamamını, Özer Hafriyat'la sorunsuz biçimde tamamlayabilirsiniz. Uygun fiyat ve kaliteli ekip arkadaşlarımızla sizlere sorunsuz hafriyat hizmeti sunuyoruz.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  );
}

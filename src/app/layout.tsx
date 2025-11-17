import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlobalModals from "@/components/layout/GlobalModals";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <ToastContainer />
        <Navbar />
        <main className="flex-1">{children}</main>
        <GlobalModals />
        <Footer />
      </body>
    </html>
  );
}

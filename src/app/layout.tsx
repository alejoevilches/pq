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
      <body>
        <ToastContainer />
        <Navbar />
        {children}
        <GlobalModals />
        <Footer />
      </body>
    </html>
  );
}

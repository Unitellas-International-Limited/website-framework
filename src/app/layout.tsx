import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import ToasterComponent from "@/components/UI/Toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <GoogleTagManager gtmId="GTM-MRB2FRFG" />
        {children}
        <ToasterComponent />
      </body>
    </html>
  );
}

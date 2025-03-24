import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/app/providers/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import ReactQueryProvider from "./providers/Reactquery/QueryProvider";
import Head from "@/components/Head/Head";
import "../styles/global.css"
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Carto App",
  description: "carto app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  dir="rtl">
      <head>
      <link rel="icon" type="image/png" href="./cartoLogo.png"  />
      </head>
      <body className="box-content "
        
      >
        <ReactQueryProvider>
        <AuthProvider>
        {children}
        </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

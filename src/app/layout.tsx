import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/app/providers/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import ReactQueryProvider from "./providers/Reactquery/QueryProvider";
import Head from "@/components/Head/Head";
import "../styles/global.css"

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
      <body
        
      >
        <ReactQueryProvider>
        <AuthProvider>
          <Head />
        {children}
        </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

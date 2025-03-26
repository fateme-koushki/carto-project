import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/app/providers/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import ReactQueryProvider from "./providers/Reactquery/QueryProvider";
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
    <html lang="en" dir="rtl">
      <head>
        <link rel="icon" type="image/png" href="./logoCartoo.png" />
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

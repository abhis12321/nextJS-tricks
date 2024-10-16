import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./__components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "next test",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>{children}</body>
      </AuthProvider>
    </html>
  );
}

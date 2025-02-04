import "./globals.css";
import { Montserrat } from "next/font/google";
import { GeistSans } from "geist/font/sans";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Fadhil | Portofolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}

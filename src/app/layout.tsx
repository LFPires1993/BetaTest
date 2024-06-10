import type { Metadata } from "next";

import "./globals.css";

import { FooterComponent } from "@/components/footer/page";
import { HeaderComponent } from "@/components/header/page";

export const metadata: Metadata = {
  title: "Una Cursos Online",
  description: "Una Cursos Online - A melhor opção de aprendizado, disponível na web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import SmoothScrolling from "@/components/ui/SmoothScrolling";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seu Nome | Fullstack Developer",
  description: "Portfólio de desenvolvimento web focado em Next.js e React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} antialiased bg-black text-gray-100 selection:bg-white/20`}>
        {/* Envolvemos tudo com o SmoothScrolling */}
        <SmoothScrolling>
          
          {/* Luzes de fundo (Ambient Glow) */}
          <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
             <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen" />
             <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-900/10 blur-[100px] rounded-full mix-blend-screen" />
          </div>

          <Header />
          
          <main className="min-h-screen flex flex-col items-center overflow-x-hidden pt-24 md:pt-32 px-4">
            {children}
          </main>
          
        </SmoothScrolling>
      </body>
    </html>
  );
}
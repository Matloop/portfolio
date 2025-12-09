import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack"; // <--- Importe aqui
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      
      <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent my-10" />
      
      <Experience />

      {/* Adicione a Tech Stack aqui */}
      <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent my-10" />
      <TechStack />
      
      <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent my-10" />

      <Projects />
      
      <footer className="py-10 text-neutral-600 text-sm">
        © {new Date().getFullYear()} Matheus.
      </footer>
    </>
  );
}
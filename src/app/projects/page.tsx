import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Search } from "lucide-react";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projetos | Portfolio",
  description: "Todos os projetos desenvolvidos.",
};

export default function AllProjectsPage() {
  return (
    <main className="min-h-screen w-full bg-black text-gray-100 pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">
      
      {/* --- CABEÇALHO DA PÁGINA --- */}
      <section className="container mx-auto max-w-6xl text-center mb-16 animate-fade-up">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
          PORTFOLIO
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">
          Todos os Projetos
        </h1>
        <p className="text-neutral-400 max-w-xl mx-auto text-lg font-light">
          Uma coleção de trabalhos, experimentos e estudos de caso desenvolvidos ao longo da minha jornada.
        </p>
      </section>

      {/* --- GRID DE PROJETOS --- */}
      <section className="container mx-auto max-w-6xl animate-fade-up animate-delay-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              href={`/projects/${project.slug}`}
              className="group flex flex-col bg-neutral-900/40 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 hover:bg-neutral-900/60 transition-all duration-300 hover:-translate-y-1"
            >
              
              {/* Imagem do Card */}
              <div className="relative w-full h-56 overflow-hidden bg-neutral-900">
                {project.mainImage ? (
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized // Evita erros 400 com links externos
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-neutral-700">
                    <Search size={32} />
                  </div>
                )}
                
                {/* Overlay ao passar o mouse */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h2>
                  <ArrowUpRight size={20} className="text-neutral-600 group-hover:text-blue-400 transition-colors" />
                </div>

                <p className="text-neutral-400 text-sm line-clamp-3 mb-6 flex-grow">
                  {project.shortDescription}
                </p>

                {/* Tags de Tecnologia (Limitado a 3 para não quebrar o layout) */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 3).map((t) => (
                    <span 
                      key={t} 
                      className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-neutral-800 border border-white/5 text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-neutral-800 border border-white/5 text-neutral-500">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- RODAPÉ SIMPLES DA PÁGINA --- */}
      <div className="text-center mt-20 text-neutral-600 text-sm animate-fade animate-delay-500">
        <p>Mostrando {projects.length} projeto(s)</p>
      </div>

      {/* --- LUZES DE FUNDO --- */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen" />

    </main>
  );
}
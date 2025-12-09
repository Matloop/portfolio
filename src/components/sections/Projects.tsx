import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-4xl py-20 animate-fade-up animate-delay-700">
      <div className="flex justify-between items-end mb-10">
        <h3 className="text-xl font-light tracking-widest text-neutral-400">
          PROJETOS SELECIONADOS
        </h3>
        {/* Link para ver todos (pode apontar para o topo ou uma página de arquivo futura) */}
        <Link href="/projects" className="text-sm text-neutral-500 hover:text-white flex items-center gap-1 transition-colors">
          Ver todos <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link 
            key={project.id} 
            // ATUALIZAÇÃO: Aponta para a rota interna dinâmica baseada no Slug
            href={`/projects/${project.slug}`}
            className="group block rounded-xl bg-neutral-900/50 border border-neutral-800 overflow-hidden hover:border-neutral-600 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Container da Imagem */}
            <div className="relative h-48 w-full overflow-hidden">
                {/* ATUALIZAÇÃO: Usa mainImage em vez de image */}
                {project.mainImage ? (
                   <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-neutral-600">
                    Sem Imagem
                  </div>
                )}
            </div>

            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                <ArrowUpRight size={18} className="text-neutral-600 group-hover:text-blue-400" />
              </div>
              
              {/* ATUALIZAÇÃO: Usa shortDescription em vez de description */}
              <p className="text-sm text-neutral-400 line-clamp-2 mb-4">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2">
                {/* Dica: O slice(0, 4) limita a 4 tags para não estourar o card se tiver muitas */}
                {project.tech.slice(0, 4).map((tech) => (
                  <span key={tech} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-neutral-800 text-neutral-300">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-neutral-800 text-neutral-500">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
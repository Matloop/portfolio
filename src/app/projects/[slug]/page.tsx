import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ArrowLeft, CheckCircle2, ExternalLink, Github, ArrowDown, Code2 } from "lucide-react";

// --- MAPEAMENTO COMPLETO DE ÍCONES (DICT) ---
// Adicionei todas as tecnologias que vi no seu print e as anteriores
const techMap: Record<string, { icon: string; invert?: boolean }> = {
  // Backend & Linguagens
  "Python": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  "Java": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  "C": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
  "C++": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  "Node.js": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  "TypeScript": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  "JavaScript": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  
  // Frameworks & Libs
  "React": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  "Next.js": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invert: true },
  "NestJS": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
  "Spring Boot": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  "Angular": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" },
  "Streamlit": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg" },
  "Pandas": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  "SQLAlchemy": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg" },
  
  // Data & Infra
  "PostgreSQL": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  "PostGIS": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" }, // Usando ícone do Postgres como fallback
  "MySQL": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  "Docker": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  "Docker Compose": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" }, // Usando ícone do Docker
  "AWS": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invert: true },
  
  // Frontend & Design
  "HTML5": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  "CSS3": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  "Tailwind": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  "WordPress": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg" },
  "WooCommerce": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original.svg" },
  "Elementor": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elementor/elementor-original.svg" },
};

// Função auxiliar para pegar o ícone
const getTechIcon = (name: string) => {
  // Tenta achar direto
  if (techMap[name]) return techMap[name];
  
  // Se não achar, tenta achar removendo espaços ou caixa baixa (ex: "NextJS" vs "Next.js")
  const normalizedKey = Object.keys(techMap).find(k => k.toLowerCase() === name.toLowerCase());
  if (normalizedKey) return techMap[normalizedKey];

  // Retorna null se não achar nada
  return { icon: null, invert: false }; 
};

async function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);
  return {
    title: project ? `${project.title} | Portfolio` : "Projeto não encontrado",
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return notFound();
  }

  return (
    <main className="min-h-screen w-full bg-black text-gray-100 pb-20 overflow-x-hidden relative">
      
      {/* Botão Voltar */}
      <div className="fixed top-8 left-4 md:left-10 z-[60] animate-fade-right">
        <Link 
          href="/#projects" 
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 transition-all"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="hidden md:inline text-sm font-medium">Voltar</span>
        </Link>
      </div>

      {/* --- HERO SECTION (ABA GIGANTE) --- */}
      <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-20 pb-10 border-b border-white/5 bg-gradient-to-b from-neutral-900/20 to-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full -z-10 pointer-events-none" />

        <div className="animate-fade-up space-y-8 max-w-5xl mx-auto">
            <span className="inline-block px-4 py-1.5 text-sm font-mono tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
                CASE STUDY
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-600">
                {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light">
                {project.fullDescription}
            </p>
        </div>

        <div className="absolute bottom-10 animate-bounce text-neutral-600">
            <ArrowDown size={24} />
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl pt-20">

        {/* --- CONTEXT --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32 animate-fade-up animate-delay-200">
          <div>
            <h3 className="text-sm font-bold text-neutral-500 tracking-[0.2em] mb-6 border-l-2 border-blue-500 pl-4 uppercase">
              Context
            </h3>
            <p className="text-neutral-300 text-lg leading-relaxed">
              {project.context}
            </p>
          </div>
          <div className="relative w-full h-[300px] md:h-[400px] bg-neutral-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {project.contextImage && (
              <Image src={project.contextImage} alt="Contexto" fill className="object-cover" />
            )}
          </div>
        </section>

        {/* --- TECHNOLOGIES USED (ATUALIZADO PARA IGUALAR A HOME) --- */}
        <section className="text-center mb-32 animate-fade-up animate-delay-300">
          <h3 className="text-sm font-bold text-neutral-500 tracking-[0.2em] mb-8 uppercase">
            Technologies Used
          </h3>
          
          {/* Grid Flexível centralizado */}
          <div className="flex flex-wrap justify-center gap-3">
            {project.tech.map((t) => {
              const { icon, invert } = getTechIcon(t);
              return (
                <div 
                  key={t} 
                  className="flex items-center gap-3 px-4 py-3 bg-neutral-900/40 border border-neutral-800 rounded-xl hover:border-neutral-600 hover:bg-neutral-800 transition-all duration-300 group cursor-default"
                >
                  {/* Ícone (Se existir no mapa) */}
                  {icon ? (
                    <div className="relative w-6 h-6">
                      <Image 
                        src={icon} 
                        alt={t} 
                        fill 
                        className={`object-contain ${invert ? 'dark:invert invert' : ''}`} 
                        
                      />
                    </div>
                  ) : (
                    // Fallback visual se não tiver ícone (Ícone de código genérico)
                    <Code2 size={24} className="text-neutral-600 group-hover:text-neutral-400" />
                  )}
                  
                  {/* Nome da Tecnologia */}
                  <span className="text-sm text-neutral-300 group-hover:text-white font-medium">
                    {t}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- VIDEO DEMO --- */}
        {project.videoUrl && (
          <section className="mb-32 animate-fade-up animate-delay-300">
            <h3 className="text-sm font-bold text-neutral-500 tracking-[0.2em] mb-8 border-l-2 border-blue-500 pl-4 uppercase">
                Video Demo
            </h3>
            <div className="relative w-full aspect-video bg-neutral-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                {project.videoUrl.includes('youtube') || project.videoUrl.includes('vimeo') ? (
                    <iframe 
                        src={project.videoUrl} 
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : (
                    <video 
                        src={project.videoUrl} 
                        controls 
                        className="w-full h-full object-cover"
                        poster={project.mainImage}
                    >
                        Seu navegador não suporta a tag de vídeo.
                    </video>
                )}
            </div>
          </section>
        )}

        {/* --- KEY FEATURES --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32 animate-fade-up animate-delay-300">
          <div className="order-2 md:order-1 relative w-full h-[300px] md:h-[400px] bg-neutral-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
             {project.featureImage && (
              <Image src={project.featureImage} alt="Features" fill className="object-cover" unoptimized />
            )}
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-sm font-bold text-neutral-500 tracking-[0.2em] mb-8 border-l-2 border-blue-500 pl-4 uppercase">
              Key Features
            </h3>
            <ul className="space-y-6">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 p-1 rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-neutral-300 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- GALLERY --- */}
        {project.galleryImages.length > 0 && (
          <section className="mb-32 animate-fade-up animate-delay-400">
            <h3 className="text-sm font-bold text-neutral-500 tracking-[0.2em] mb-12 text-center uppercase">
              Project Gallery
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.galleryImages.map((img, idx) => (
                <div key={idx} className="relative h-64 bg-neutral-900 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all group">
                  <Image src={img} alt={`Gallery ${idx}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110"  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* --- OUTCOME & LINKS --- */}
        <section className="mb-20 animate-fade-up animate-delay-500">
          <div className="bg-neutral-900/30 border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center justify-between">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-sm font-bold text-neutral-500 tracking-[0.2em] mb-4 uppercase">Outcome</h3>
              <p className="text-neutral-300 leading-relaxed">{project.outcome}</p>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto min-w-[200px]">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" className="w-full py-3 px-6 rounded-lg bg-white text-black font-bold text-center hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                  <ExternalLink size={18} /> Visitar Site
                </a>
              )}
               {project.repoLink && (
                <a href={project.repoLink} target="_blank" className="w-full py-3 px-6 rounded-lg bg-black border border-white/20 text-white font-medium text-center hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  <Github size={18} /> Código Fonte
                </a>
              )}
            </div>
          </div>
        </section>

      </div>
      
      {/* Luzes de Fundo */}
      <div className="fixed top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen" />
      <div className="fixed bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen" />
    </main>
  );
}
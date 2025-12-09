import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center pt-20 pb-32 space-y-8 animate-fade-up animate-once animate-duration-1000 animate-delay-300">
      
      {/* Imagem de Perfil e Localização */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-neutral-800 hover:border-white transition-colors duration-500">
          {/* Substitua '/me.jpg' pela sua foto na pasta public */}
          <Image 
            src="/assets/suit-me-red.jpg" 
            alt="Foto de Perfil" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="text-neutral-300">
          <h2 className="text-xl md:text-2xl font-light">
            Olá, eu sou <span className="font-semibold text-white">Matheus.</span>
          </h2>
          <p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">
            Brasil • Software Developer
          </p>
        </div>
      </div>

      {/* Texto Gigante "FULLSTACK DEVELOPER" */}
      <div className="space-y-[-10px] md:space-y-[-20px]">
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600">
          FULLSTACK
        </h1>
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-neutral-800">
          DEVELOPER
        </h1>
      </div>

      {/* Botões de Ação */}
      <div className="flex items-center gap-4 pt-4">
        <Link href="mailto:seuemail@gmail.com">
          <button className="group relative px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform">
            Entre em contato
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:animate-ping"></div>
          </button>
        </Link>
        
        {/* Ícones Sociais */}
        <div className="flex gap-4">
          <SocialLink href="https://github.com/Matloop" icon={<Github size={20} />} />
          <SocialLink href="https://www.linkedin.com/in/matheus-dias-est%C3%A1cio-4102572b7/" icon={<Linkedin size={20} />} />
        </div>
      </div>
    </section>
  );
}

// Pequeno componente auxiliar para os ícones
function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      className="p-3 rounded-full border border-neutral-800 hover:bg-neutral-800 hover:text-white text-neutral-400 transition-all hover:scale-110"
    >
      {icon}
    </Link>
  );
}
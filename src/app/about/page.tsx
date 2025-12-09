import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Book, Code2, Coffee, Dumbbell, Gamepad2, Globe, Heart, Music } from "lucide-react";

export const metadata = {
  title: "Sobre Mim | Portfolio",
  description: "Conheça mais sobre minha jornada, habilidades e interesses.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-black text-gray-100 pt-32 pb-20 px-4 md:px-6 relative overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="container mx-auto max-w-5xl text-center mb-20 animate-fade-up">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
          O DESENVOLVEDOR
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">
          Um pouco sobre mim
        </h1>
      </section>

      {/* --- BIO & FOTO --- */}
      <section className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32 animate-fade-up animate-delay-200">
        
        {/* Lado Esquerdo: Imagem */}
        <div className="relative w-full aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
          {/* Substitua esta URL pela sua foto real em /public/assets/me.jpg */}
          <Image
            src="assets/suit-me.jpg"
            alt="Foto de Perfil"
            fill
            className="object-cover"
            unoptimized
          />
          {/* Overlay gradiente para dar estilo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Lado Direito: Texto */}
        <div className="space-y-6 text-neutral-300 leading-relaxed text-lg">
          <h2 className="text-2xl font-bold text-white mb-4">
            De curioso a <span className="text-blue-400">Fullstack Developer</span>.
          </h2>
          
          <p>
            Comecei no mundo da programação há 2 anos, e a partir disso semprei busquei aprender mais.
          </p>
          
          <p>
            Hoje, especializo-me em construir aplicações web modernas, focando não apenas em código, mas na experiência de quem usa. Acredito que a tecnologia deve ser invisível e facilitar a vida das pessoas.
          </p>

         

          {/* Assinatura ou Botão */}
          <div className="pt-4">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors"
            >
              Ver meu trabalho <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- ALÉM DO CÓDIGO (Hobbies / Personalidade) --- */}
      <section className="container mx-auto max-w-6xl mb-32 animate-fade-up animate-delay-300">
        <h3 className="text-sm font-bold text-neutral-500 tracking-[0.2em] mb-12 text-center uppercase">
            Além do Código
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <HobbyCard 
                icon={<Dumbbell size={24} />} 
                title="Academia" 
                desc="Para deixar o corpo e a mente em dia" 
            />
            <HobbyCard 
                icon={<Book size={24} />} 
                title="Livros" 
                desc="Adoro ler livros de litelatura clássica e e programação." 
            />
            <HobbyCard 
                icon={<Music size={24} />} 
                title="Música" 
                desc="A música é meu foco. Sempre codando com uma boa playlist." 
            />
            <HobbyCard 
                icon={<Globe size={24} />} 
                title="Viajar" 
                desc="Conhecer novas culturas expande a criatividade." 
            />
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="container mx-auto max-w-4xl text-center py-20 bg-neutral-900/30 border border-white/5 rounded-3xl animate-fade-up animate-delay-400">
        <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-full mb-6 text-blue-400">
            <Coffee size={24} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Vamos construir algo juntos?
        </h2>
        <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Estou sempre aberto a novas oportunidades e parcerias. Se você tem um projeto em mente ou apenas quer trocar uma ideia, entre em contato.
        </p>
        <Link 
            href="mailto:seuemail@gmail.com"
            className="inline-block px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-neutral-200 hover:scale-105 transition-all"
        >
            Entrar em Contato
        </Link>
      </section>

      {/* --- LUZES DE FUNDO --- */}
      <div className="fixed top-1/4 left-0 w-[500px] h-[500px] bg-green-900/10 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen" />

    </main>
  );
}

// Pequeno componente interno para os cards de Hobby
function HobbyCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1">
            <div className="mb-4 text-neutral-300">{icon}</div>
            <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
            <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
        </div>
    )
}
"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Mail, MapPin, Instagram, Github, Linkedin, Send } from "lucide-react";
// 1. Importar o dynamic do next
import dynamic from "next/dynamic";
import Link from "next/link";

// 2. Importar o Mapa Dinamicamente (Desativando SSR)
const Map = dynamic(() => import("@/components/ui/Map"), { 
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-neutral-900 animate-pulse rounded-xl flex items-center justify-center text-neutral-500">
      Carregando mapa...
    </div>
  )
});

export default function ContactPage() {
  const [state, handleSubmit] = useForm("SEU_CODIGO_AQUI"); // <--- LEMBRE DE POR SEU CÓDIGO FORMSPREE

  if (state.succeeded) {
    return (
      <main className="min-h-screen bg-black text-gray-100 flex flex-col items-center justify-center pt-20">
        <div className="bg-neutral-900/50 p-8 rounded-2xl border border-white/10 text-center animate-fade-up">
            <h2 className="text-3xl font-bold text-white mb-4">Obrigado!</h2>
            <p className="text-neutral-400 mb-6">Sua mensagem foi enviada com sucesso.</p>
            <Link href="/" className="text-blue-400 hover:underline">Voltar para a Home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full bg-black text-gray-100 pt-32 pb-20 px-4 md:px-6 relative overflow-x-hidden">
      
      <section className="container mx-auto max-w-5xl text-center mb-16 animate-fade-up">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
          CONTATO
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">
          Vamos conversar?
        </h1>
      </section>

      <section className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 animate-fade-up animate-delay-200">
        
        {/* --- COLUNA DA ESQUERDA --- */}
        <div className="space-y-10">
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white font-serif">Localização & Email</h2>
            
            <div className="flex items-start gap-4 text-neutral-400">
                <MapPin className="mt-1 text-blue-500 flex-shrink-0" />
                <div className="w-full">
                    <p className="mb-4">Brasil</p>
                    
                    {/* 3. AQUI ESTÁ O MAPA */}
                    <div className="w-full h-48 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                        <Map />
                    </div>

                </div>
            </div>

            <div className="flex items-center gap-4 text-neutral-400">
                <Mail className="text-blue-500 flex-shrink-0" />
                <a href="mailto:matheusdiasestacioo@gmail.com" className="hover:text-white transition-colors break-all">
                    matheusdiasestacioo@gmail.com
                </a>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white font-serif">Siga-me</h2>
            <div className="flex gap-4">
                <SocialIcon href="https://github.com/SEU_USER" icon={<Github size={20} />} />
                <SocialIcon href="https://linkedin.com/in/SEU_USER" icon={<Linkedin size={20} />} />
                <SocialIcon href="https://instagram.com/SEU_USER" icon={<Instagram size={20} />} />
            </div>
          </div>
        </div>

        {/* --- COLUNA DA DIREITA (Formulário) --- */}
        <div className="bg-neutral-900/30 p-8 rounded-2xl border border-white/5 shadow-xl h-fit">
            <h2 className="text-2xl font-bold text-white font-serif mb-8">Envie uma mensagem</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-neutral-500 uppercase tracking-wider">Nome</label>
                    <input id="name" type="text" name="name" className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-neutral-200 focus:outline-none focus:border-blue-500 transition-colors" required />
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-neutral-500 uppercase tracking-wider">Email</label>
                    <input id="email" type="email" name="email" className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-neutral-200 focus:outline-none focus:border-blue-500 transition-colors" required />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-neutral-500 uppercase tracking-wider">Mensagem</label>
                    <textarea id="message" name="message" rows={5} className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-neutral-200 focus:outline-none focus:border-blue-500 transition-colors resize-none" required />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs" />
                </div>

                <button type="submit" disabled={state.submitting} className="w-full bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50">
                    {state.submitting ? "Enviando..." : <>Enviar <Send size={18} /></>}
                </button>
            </form>
        </div>

      </section>
      
      <div className="fixed top-1/3 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen" />
    </main>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-900 border border-white/10 rounded-full text-neutral-400 hover:text-white hover:border-white/30 hover:bg-neutral-800 transition-all">
            {icon}
        </a>
    )
}
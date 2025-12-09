"use client";

import { useState } from "react";
import { experience } from "@/data/experience";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export default function Experience() {
  // Estado para controlar qual aba está ativa: 'work' ou 'study'
  const [activeTab, setActiveTab] = useState<"work" | "study">("work");

  // Filtra os dados baseado na aba selecionada
  const filteredData = experience.filter((item) => item.type === activeTab);

  return (
    <section id="experience" className="w-full max-w-3xl py-20 animate-fade-up animate-delay-300">
      
      {/* Título da Seção */}
      <h3 className="text-xl font-light tracking-widest text-neutral-400 mb-8">
        EXPERIÊNCIA
      </h3>

      {/* O Switcher (Botões de Aba) - Igual ao da imagem */}
      <div className="flex justify-center mb-12">
        <div className="grid grid-cols-2 p-1 bg-neutral-900/50 border border-neutral-800 rounded-xl w-full max-w-sm">
          
          <button
            onClick={() => setActiveTab("work")}
            className={`
              flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300
              ${activeTab === "work" 
                ? "bg-neutral-800 text-white shadow-lg" 
                : "text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800/50"}
            `}
          >
            <Briefcase size={16} />
            Experiências
          </button>

          <button
            onClick={() => setActiveTab("study")}
            className={`
              flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300
              ${activeTab === "study" 
                ? "bg-neutral-800 text-white shadow-lg" 
                : "text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800/50"}
            `}
          >
            <GraduationCap size={16} />
            Estudos
          </button>

        </div>
      </div>

      {/* Lista de Itens (Timeline) */}
      <div className="relative border-l border-neutral-800 ml-3 md:ml-6 space-y-12">
        {filteredData.map((item) => (
          <div 
            key={item.id} 
            className="relative pl-8 md:pl-12 animate-fade-right animate-once animate-duration-500"
          >
            
            {/* Ícone/Logo na linha do tempo (Bolinha com ícone) */}
            <div className="absolute -left-[20px] top-0 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 group hover:border-white transition-colors">
               {/* Se você tiver logos reais nos dados, use <Image /> aqui. 
                   Por enquanto, usaremos ícones baseados no tipo */}
               {item.type === 'work' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
            </div>
            
            <div className="flex flex-col gap-1">
              {/* Data */}
              <div className="flex items-center gap-2 text-xs text-neutral-500 mb-1">
                <Calendar size={12} />
                <span>{item.period}</span>
              </div>

              {/* Título e Empresa */}
              <h4 className="text-lg font-bold text-white leading-none">
                {item.company}
              </h4>
              <p className="text-neutral-400 font-medium text-sm mt-1">
                {item.role}
              </p>
              
              {/* Descrição */}
              <p className="text-sm text-neutral-500 leading-relaxed mt-3">
                {item.description}
              </p>
            </div>
          </div>
        ))}

        {filteredData.length === 0 && (
          <p className="text-neutral-500 pl-8">Nenhum registro encontrado nesta categoria.</p>
        )}
      </div>
    </section>
  );
}
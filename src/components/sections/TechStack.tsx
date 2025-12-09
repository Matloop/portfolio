"use client";

import { useState } from "react";
import Image from "next/image";
import { Code2, Cpu } from "lucide-react";

// Definição dos tipos de dados
type TechItem = {
  name: string;
  icon: string;
  invert?: boolean; // Opcional
};

const techData: { main: TechItem[]; others: TechItem[] } = {
  main: [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  ],
  others: [
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invert: true },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invert: true },
    { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
  ]
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState<"main" | "others">("main");

  return (
    <section className="w-full max-w-3xl py-10 animate-fade-up animate-delay-[400ms]">
      <h3 className="text-xl font-light tracking-widest text-neutral-400 mb-8">
        TECH STACK
      </h3>

      {/* --- Switcher de Abas --- */}
      <div className="flex justify-start mb-8">
        <div className="flex p-1 bg-neutral-900/50 border border-neutral-800 rounded-xl">
          <button
            onClick={() => setActiveTab("main")}
            className={`
              flex items-center gap-2 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300
              ${activeTab === "main" 
                ? "bg-neutral-800 text-white shadow-lg" 
                : "text-neutral-500 hover:text-neutral-300"}
            `}
          >
            <Code2 size={16} />
            Principal
          </button>

          <button
            onClick={() => setActiveTab("others")}
            className={`
              flex items-center gap-2 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300
              ${activeTab === "others" 
                ? "bg-neutral-800 text-white shadow-lg" 
                : "text-neutral-500 hover:text-neutral-300"}
            `}
          >
            <Cpu size={16} />
            Outras
          </button>
        </div>
      </div>

      {/* --- Grid de Ícones --- */}
      <div className="flex flex-wrap gap-3">
        {techData[activeTab].map((tech) => (
          <div 
            key={tech.name}
            className="flex items-center gap-3 p-3 bg-neutral-900/40 border border-neutral-800 rounded-xl hover:border-neutral-600 hover:bg-neutral-800 transition-all duration-300 group cursor-default"
          >
            <div className="relative w-6 h-6">
              <Image 
                src={tech.icon} 
                alt={tech.name} 
                fill 
                className={`object-contain ${tech.invert ? 'dark:invert invert' : ''}`} 
              />
            </div>
            <span className="text-sm text-neutral-400 group-hover:text-white transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
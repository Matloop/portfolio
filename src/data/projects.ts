export interface Project {
id: number;
slug: string;
title: string;
shortDescription: string;
fullDescription: string;
tech: string[];
mainImage: string;
context: string;
contextImage?: string;
features: string[];
videoUrl?: string;
featureImage?: string;
galleryImages: string[];
outcome: string;
liveLink?: string;
repoLink?: string;
}
export const projects: Project[] = [
  
  // COLE O NOVO PROJETO AQUI
  {
    id: 1,
    slug: "plataforma-investimentos",
    title: "Plataforma de Gerenciamento de Portfólio",
    shortDescription: "Aplicação full-stack para acompanhamento e análise de carteiras de investimentos.",
    fullDescription: "Uma solução completa que desenvolvi do zero para consolidar e analisar investimentos de Renda Fixa e Variável. O sistema integra-se a APIs de mercado para buscar dados em tempo real e históricos, calculando com precisão a rentabilidade e a evolução do patrimônio do usuário.",
    tech: ["Next.js", "TypeScript", "React", "Java", "Spring Boot", "Redis", "PostgreSQL", "Docker", "AWS"],
    
    // Imagem Principal (Hero) - Substitua pelo seu arquivo
    mainImage: "/assets/finance-portfolio-gallery-1.png", 
    
    context: "O objetivo era criar uma ferramenta unificada e de alta performance que eu mesmo gostaria de usar. O maior desafio técnico foi integrar múltiplas fontes de dados (APIs e web scraping) de forma assíncrona e otimizar as consultas para fornecer uma experiência de usuário fluida e instantânea.",
    // Imagem do Contexto - Substitua pelo seu arquivo
    contextImage: "/assets/finance-portfolio-gallery-1.png",
    
    features: [
      "Dashboard consolidado com patrimônio total, rentabilidade e alocação de ativos.",
      "Cálculo detalhado da rentabilidade de Renda Fixa, incluindo Tesouro Direto (IPCA, Selic) e CDBs.",
      "Integração com APIs do Banco Central (CDI/IPCA) e Yahoo Finance (Ações, Criptos).",
      "Cache distribuído com Redis para acelerar drasticamente o carregamento de dados históricos e cotações.",
      "Autenticação segura de ponta a ponta utilizando Spring Security e tokens JWT."
    ],
    // Vídeo demonstrativo - Substitua pelo seu arquivo
    videoUrl: "/assets/finance-portfolio-demo.mp4",
    // Imagem das Features - Substitua pelo seu arquivo
    featureImage: "/assets/finance-portfolio-gallery-1.png",
    
    galleryImages: [
      "/assets/finance-portfolio-gallery-1.png", // Ex: Tela de adicionar transação
      "/assets/finance-portfolio-gallery-2.png", // Ex: Gráfico de evolução
      "/assets/finance-portfolio-gallery-3.png"  // Ex: Detalhes de um ativo
    ],
    
    outcome: "O resultado é uma plataforma robusta e escalável. A implementação do Redis reduziu o tempo de carregamento do gráfico de evolução de vários segundos para milissegundos após a primeira consulta, validando a arquitetura focada em performance. O projeto solidificou minhas habilidades em arquitetura de microsserviços, cache e programação reativa.",
    // liveLink: "https://seu-link-de-deploy.com/", // Descomente se tiver um link ao vivo
    repoLink: "https://github.com/Matloop/Finance-portfolio-back" // Link para o back-end
  },
  {
    id: 2, // Lembre-se de usar um ID único
    slug: "aps-health-data-platform",
    title: "APS Health Data - Plataforma de Análise de Saúde",
    shortDescription: "Plataforma de ETL e visualização de dados de saúde, vencedora do APS Hackathon Premiersoft 2025.",
    fullDescription: "Solução completa de engenharia de dados projetada para consolidar, processar e analisar grandes volumes de dados de saúde. O sistema ingere informações de múltiplas fontes e formatos (CSV, XML, HL7, FHIR), aplica regras de negócio complexas e alimenta um dashboard interativo para apoiar a tomada de decisão de gestores de saúde.",
    tech: ["Python", "Pandas", "PostgreSQL", "PostGIS", "Docker", "Docker Compose", "Streamlit", "SQLAlchemy"],
    
    // Imagem Principal (Hero) - Use uma imagem geral do dashboard
    mainImage: "/assets/aps-health-dashboard-main.png", 
    
    context: "O desafio do hackathon era criar um pipeline de dados resiliente e escalável para a Agência Premiersoft de Saúde. O maior desafio técnico foi construir um motor de ingestão flexível, capaz de traduzir formatos complexos como HL7, e desenvolver algoritmos de alocação inteligente de recursos (médicos e pacientes) baseados em regras de negócio como especialidade e proximidade geográfica (raio de 30km).",
    // Imagem do Contexto - Pode ser um diagrama da arquitetura
    contextImage: "/assets/aps-health-architecture.png",
    
    features: [
      "Pipeline de ETL completo com etapas de Extração, Transformação e Carga.",
      "Motor de ingestão universal que suporta CSV, Excel, XML, JSONL, HL7 e FHIR.",
      "Algoritmo de alocação de médicos baseado em especialidade, proximidade e carga de trabalho.",
      "Algoritmo de alocação de pacientes que direciona para o hospital especializado mais próximo, utilizando a fórmula de Haversine para cálculos de distância.",
      "Dashboard interativo com KPIs, mapa de ocupação hospitalar e análise de diagnósticos (CID-10).",
      "Arquitetura totalmente containerizada com Docker para garantir a reprodutibilidade do ambiente."
    ],
    // Vídeo demonstrativo - Grave um vídeo curto da navegação no dashboard
    videoUrl: "/assets/aps-health-demo.mp4",
    // Imagem das Features - Pode ser uma imagem focada no mapa ou nos gráficos
    featureImage: "/assets/aps-health-features.png",
    
    galleryImages: [
      "/assets/foto-3-hack.jpeg",  // Tela principal
      "/assets/foto-2-hack.jpeg",             // Detalhe do mapa
      "/assets/foto-1-hack.jpeg"           // Detalhe dos gráficos
    ],
    
    outcome: "Nossa equipe conquistou o 1º lugar no hackathon. O projeto validou minhas habilidades em arquitetura de sistemas de dados, processamento de ETL, modelagem de banco de dados (relacional e geoespacial) e prototipagem rápida de dashboards. A solução foi elogiada por sua robustez, clareza arquitetural e pela complexidade da lógica de negócio implementada em um curto espaço de tempo.",
    // liveLink: "http://localhost:8501", // Link para rodar localmente
    repoLink: "https://github.com/seu-usuario/seu-repositorio-hackathon" // Link para o repositório do projeto
  },
];
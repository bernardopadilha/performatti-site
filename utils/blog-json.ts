interface BlogNoticesProps  {
    id: number
    title: string
    imgUrl: string
    category: string
    description: string
    date: string
  }

export const blogNotices: BlogNoticesProps[] = [
    {
        id: 1,
        title: "Empresas usam Inteligência Artificial para monitorar desempenho de funcionários",
        imgUrl: "/robot-image.png",
        category: "IA",
        description: "Nos últimos anos, a Inteligência Artificial (IA) tem se consolidado como uma ferramenta essencial para a otimização de processos em empresas de todos os setores. Um dos usos mais promissores dessa tecnologia é o monitoramento de desempenho dos funcionários, trazendo uma nova era de eficiência e precisão na gestão de equipes.",
        date: "16 October 2023"
    },
    {
        id: 2,
        title: "Empresas apostam em monitoramento de equipes: Veja as vantagens",
        imgUrl: "/graphic-image.png",
        category: "Performance",
        description: "No cenário empresarial atual, onde a eficiência e a agilidade são fundamentais, muitas empresas estão investindo no monitoramento de equipes como uma forma de otimizar o desempenho e obter melhores resultados. Embora o monitoramento possa suscitar debates, seus benefícios práticos têm se mostrado valiosos para muitas organizações. Neste artigo, exploramos as principais vantagens que o monitoramento de equipes pode trazer para sua empresa.",
        date: "16 October 2023"
    },
    {
        id: 3,
        title: "A Importância da Tecnologia na Performance das Empresas",
        imgUrl: "/social-midia-image.png",
        category: "Tecnologia",
        description: "Em um mundo onde a inovação tecnológica avança a passos largos, o desenvolvimento e a performance das empresas dependem cada vez mais da capacidade de integrar novas ferramentas e soluções digitais. Desde a automação de processos até a análise de dados em tempo real, a tecnologia se tornou um fator crucial para manter a competitividade e promover o crescimento sustentável.",
        date: "16 October 2023"
    }
  ]
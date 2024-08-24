import BlogCardNotice from "../../blog/BlogCardNotice"
import CtaBannerGreen from "@/components/cta/cta-banner-green"

export default function Section1() {
  return (
    <section className="section-box">
      <div className="container items-center mt-80">
        <h2 className="mb-20 mt-20 display-4-semibold text-center">Acesse nosso blog e fique por dentro das ultimas notificas sobre Tecnologia, IA’s, Performance e muito mais</h2>
        <div className="items-center mt-45">
          <BlogCardNotice
            key="Page Plan"
            type="Performance"
            date="16 October 2023"
            title="A Importância da Tecnologia na Performance das Empresas"
            imageUrl="/social-midia-image.png"
            description="Em um mundo onde a inovação tecnológica avança a passos largos, o desenvolvimento e a performance das empresas dependem cada vez mais da capacidade de integrar novas ferramentas e soluções digitais. Desde a automação de processos até a análise de dados em tempo real, a tecnologia se tornou um fator crucial para manter a competitividade e promover o crescimento sustentável."
          />
        </div>
      </div>

      <div className="container mt-100 mb-100">
        <CtaBannerGreen key="Page Plan" title="Ainda está com dúvidas?" description="Nossa equipe está pronta para responder suas perguntas e garantir que você faça a escolha certa para maximizar a eficiência e o sucesso do seu negócio" buttonTittle="Assistir a demonstração" />
      </div>
    </section>
  )
}
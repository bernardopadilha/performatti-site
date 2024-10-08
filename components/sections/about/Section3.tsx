import BlogCardNotice from "@/components/elements/BlogCardNotice";

export default function Section2() {
  return (
    <>
      <section className="section-box mt-100 mb-80">
        <div className="container">
          <div className="items-center">
            <h2 className="mb-50 display-4-semibold max-w-text text-center">Acesse nosso blog e fique por dentro das ultimas notícias sobre <br className="none" /> Tecnologia, IA’s, Performance e muito mais</h2>
            <BlogCardNotice
              key="home page"
              date="16 October 2023"
              type="Performance"
              title="Empresas apostam em monitoramento de equipes: Veja as vantagens"
              imageUrl="/graphic-image.png"
              description="No cenário empresarial atual, onde a eficiência e a agilidade são fundamentais,
              muitas empresas estão investindo no monitoramento de equipes como uma forma de
              otimizar o desempenho e obter melhores resultados. Embora o monitoramento possa suscitar
              debates, seus benefícios práticos têm se mostrado valiosos para muitas organizações.
              <br /> <br />
              Neste artigo, exploramos as principais vantagens que o monitoramento de equipes pode trazer para sua empresa."
            />
          </div>
        </div>
      </section>
    </>
  )
}

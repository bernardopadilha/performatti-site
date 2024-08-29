
import { CardAbout } from '@/components/elements/CardAbout'
import VideoPopup from '@/components/elements/VideoPopup'
import Link from 'next/link'

export default function Section2() {
  return (
    <>
      <section className="section-box">
        <div className="container items-center">
          <div className="box-image-rect">
            <img src="/video-image.png" alt="Performatti" />
            <VideoPopup />
          </div>

          <div className="container">
            <div className="flex-center-card gap-card-about">
              <div className="col-lg-4">
                <CardAbout
                  title="Nossa Missão"
                  imageUrl="/card-about-1.png"
                  description="Transformar a gestão de mão de obra por meio da inovação tecnológica, fornecendo soluções inteligentes e eficientes que otimizam processos de produção e maximizam o desempenho das equipes operacionais"
                />
              </div>
              <div className="col-lg-4">
                <CardAbout
                  title="Nossa Visão"
                  imageUrl="/card-about-2.png"
                  description="Ser a principal referência em tecnologia para gestão e produtividade, capacitando empresas a alcançar novos níveis de produtividade, eficiência e segurança em seus projetos"
                />
              </div>
              <div className="col-lg-4">
                <CardAbout
                  title="Nossos Valores"
                  imageUrl="/card-about-3.png"
                  description="Nosso foco é maximizar a performance das empresas. Com as ferramentas certas e uma abordagem centrada em resultados, ajudamos nossos clientes a alcançar novos patamares de eficiência e crescimento sustentável."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import CtaBannerGreen from "@/components/cta/cta-banner-green";
import Link from "next/link";

export default function Section2() {
  return (
    <section className="section-box">
      <div className="container flex-center-contact gap-40 mt-60">
        <div className="contact-container col-lg-7 mb-30-contact relative-top-170">
          <h2 className="mb-20 ">Fale com um especialista</h2>
          <div className="block-form-contact mt-25">
            <form action="#">
              <div className="form-group">
                <label htmlFor="fullname">
                  Seu nome</label>
                <input className="form-control" type="text" placeholder="Nome" />
              </div>
              <div className="form-group">
                <label htmlFor="fullname">
                  Seu e-mail corporativo</label>
                <input className="form-control" type="text" placeholder="email@empresa.com.br" />
              </div>
              <div className="form-group">
                <label htmlFor="fullname">
                  DDD + Número de telefone</label>
                <input className="form-control" type="text" placeholder="(DDD) + 9 1234-5678" />
              </div>
              <div className="form-group">
                <label htmlFor="fullname">
                  Empresa</label>
                <input className="form-control" type="text" placeholder="Nome da empresa" />
              </div>
              <div className="form-group">
                <label htmlFor="fullname">
                Mensagem</label>
                <textarea className="form-control" rows={7} placeholder="Mensagem" />
              </div>
              <div className="form-group">
                <button className="btn btn-black btn-rounded" type="submit">Enviar
                  <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill="true" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="row gap-50 container mb-mobile-50">
          <div className="box-border-rounded">
            <div className="card-casestudy">
              <div className="card-title">
                <h6><span className="number">1</span>Preencha o formulário</h6>
              </div>
              <div className="card-desc">
                <p>Essa etapa é essencial para entendermos melhor o que você busca e como podemos ajudar a transformar seu negócio.</p>
              </div>
            </div>
          </div>
          <div className="box-border-rounded">
            <div className="card-casestudy">
              <div className="card-title">
                <h6><span className="number">2</span>Aguarde o retorno de um especialista</h6>
              </div>
              <div className="card-desc">
                <p>Após enviar o formulário, um de nossos especialistas entrará em contato com você. Eles vão analisar suas informações e oferecer uma consultoria personalizada para identificar o melhor plano e as soluções mais adequadas para sua empresa.</p>
              </div>
            </div>
          </div>
          <div className="box-border-rounded">
            <div className="card-casestudy">
              <div className="card-title">
                <h6><span className="number">3</span>Adquira seu plano</h6>
              </div>
              <div className="card-desc">
                <p>Com todas as informações em mãos, você estará pronto para escolher o plano que melhor se ajusta às suas necessidades. Nosso especialista guiará você na contratação e integração das soluções Performatti, garantindo que você comece a aproveitar ao máximo nossa plataforma rapidamente.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-green-card relative-top-100">
        <CtaBannerGreen
          key="Page Contact"
          title="Ainda está com dúvidas?"
          description="Nossa equipe está pronta para responder suas perguntas e garantir que você faça a escolha certa para maximizar a eficiência e o sucesso do seu negócio"
          buttonTittle="Assistir a demonstração"
        />
      </div>
    </section>

  )
}

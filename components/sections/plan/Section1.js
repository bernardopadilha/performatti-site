import Link from "next/link";

export default function Section1() {
  return (
    <section className="section-box">
      <div className="banner-hero hero-5">
        <div className="banner-about-inner-top">
          <div className="container items-center">
            <div className="box-banner-center">
              <Link className="btn btn-brand-5-light" href="#">
                Planos Performatti
              </Link>
              <h1 className="display-2 mb-30 mt-25 neutral-0">O plano perfeito para o a sua empresa</h1>
              <p className="text-lg neutral-500 mb-55">Encontre a solução ideal para impulsionar sua empresa. Nossos planos são desenhados para atender suas necessidades específicas e levar sua performance ao próximo nível</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
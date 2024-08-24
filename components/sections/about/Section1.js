
import Link from 'next/link'

export default function Section1() {
  return (
    <>
      <section className="section-box">
        <div className="hero-5">
          <div className="banner-inner-top">
            <div className="container items-center">
              <div className="box-about-banner-center"><Link className="btn btn-brand-5-new" href="#"><span>Novo</span>
                Tudo em um lugar só
                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                  <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="true" />
                </svg></Link>
                <h1 className="display-2 mb-30 mt-25 neutral-0">Juntos vamos moldar o futuro da sua empresas com soluções inovadoras e um olhar visionário</h1>
                <p className="text-lg neutral-500 mb-55">Somos uma equipe dedicada e apaixonada pela transformação, pronta para impulsionar seu sucesso. Conheça o impacto que a sua empresa pode ter com a Performatti.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

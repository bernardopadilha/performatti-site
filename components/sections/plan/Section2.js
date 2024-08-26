import { CardPlan } from "@/components/elements/CardPlan";
import { plans } from "@/util/plan-json";
import Link from "next/link";

export default function Section2() {
  return (
    <section className="section-box">
      <div className="container items-center">
        <div className="relative-top-100">
          <div className="row">
            {plans.map(plan => (
              <div className="col-lg-3 mt-mobile-50">
                <CardPlan title={plan.title} iconUrl={plan.iconUrl} topics={plan.topics} />
              </div>
            ))}

            <div className="w-full justify-center gap-2 mt-40">
              <button className="btn btn-plans">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M0 10.9993L3.5209 14.5203V11.6924H22V10.3064H3.5209V7.47852L0 10.9993Z" fill="true" />
                </svg>
              </button>
              <button className="btn btn-plans">
                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                  <path d="M22 10.9993L18.4791 7.47852V10.3064H0V11.6924H18.4791V14.5203L22 10.9993Z" fill="true" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="row flex-center">
          <div className="col-lg-6 mb-40">
            <img src="/mockup-ipad-macbook.png" alt="Performatti" />
            <div className='items-center relative-top-32'>
              <Link className="btn btn-brand-4-medium col-lg-10" href="#">Consulte os planos
                <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill="true" />
                </svg></Link>
            </div>
          </div>
          <div className="col-lg-6 mb-80">
            <div className="box-padding-left-50">
              <Link className="btn btn-brand-5-mobile" href="#"><span>Não perca mais tempo</span></Link>
              <h2 className="heading-4 mb-20">Faça a escolha certa e obtenha o máximo de nossos recursos</h2>
              <p className="text-lg neutral-700">Descubra como nossos planos oferecem vantagens exclusivas para o crescimento do seu negócio. Solicite uma demonstração para explorar os benefícios de cada opção e veja como nossas soluções podem maximizar sua eficiência, personalização e suporte, garantindo que você obtenha o máximo valor e alcance seus objetivos com sucesso.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
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
              <div className="col-lg-3">
                <CardPlan title={plan.title} iconUrl={plan.iconUrl} topics={plan.topics} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-center">
          <div className="col-lg-6 mb-40">
            <img src="/mockup-ipad-macbook.png" alt="Performatti" />
            <div className='items-center relative-top-32'>
              <Link className="btn btn-brand-4-medium col-lg-10" href="#">Consulte os planos
                <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill="true" />
                </svg></Link>
            </div>
          </div>
          <div className="mb-40">
            <div className="box-padding-left-50">
              <Link className="btn btn-brand-5-mobile" href="#"><span>Não perca mais tempo</span></Link>
              <h2 className="heading-2 mb-20">Faça a escolha certa e obtenha o máximo de nossos recursos</h2>
              <p className="text-lg neutral-700">Descubra como nossos planos oferecem vantagens exclusivas para o crescimento do seu negócio. Solicite uma demonstração para explorar os benefícios de cada opção e veja como nossas soluções podem maximizar sua eficiência, personalização e suporte, garantindo que você obtenha o máximo valor e alcance seus objetivos com sucesso.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
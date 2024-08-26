import Link from "next/link";

export default function Section1() {
  return (
    <section className="section-box">
      <div className="banner-hero hero-5">
        <div className="banner-contact-inner-top">
          <div className="container items-center">
            <div className="box-banner-center">
              <Link className="btn btn-brand-5-light" href="#">
                Planos Performatti
              </Link>
              <h1 className="display-2 mb-15 mt-25 neutral-0">Contato</h1>
              <p className="flex-center gap-2 mb-60">
                <Link className="flex-center gap-2 text-lg neutral-500 flex-center" href="/">
                  <img src="/home.svg" alt="Performatti" />
                  Home
                </Link>

                <img src="/arrow-to-right.svg" alt="Performatti" />
                <Link className="text-lg neutral-500 flex-center" href="#">
                  Contato
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
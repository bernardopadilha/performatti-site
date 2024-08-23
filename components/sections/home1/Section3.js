import Link from 'next/link'

export default function Section3() {
    return (
        <>

            <section className="section-box">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 mb-40">
                            <img src="/performatti-app-banner.png" alt="Performatti" />
                            <div className='relative-top-18'>
                                <Link className="btn btn-brand-4-medium mr-50" href="#">Consulte os planos
                                    <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill="true" />
                                    </svg></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-40">
                            <div className="box-padding-left-50">
                                <Link className="btn btn-brand-5-mobile" href="#"><span>Aplicativo Mobile</span></Link>
                                <h2 className="heading-2 mb-20">Tudo o que você precisa, na palma da mão</h2>
                                <p className="text-lg neutral-700">Chega de ficar no escuro sobre o desempenho da sua equipe. O app da Performatti oferece tudo o que você precisa para monitorar o desenvolvimento e a produtividade do seu time em tempo real, proporcionando uma visão clara e detalhada das operações, Onde quer que você esteja.</p>
                                <p className="text-lg neutral-700 spacing-top-3">Com a Performatti, a gestão eficiente está ao seu alcance a qualquer momento.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

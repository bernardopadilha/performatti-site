
import Link from 'next/link'

export default function Section1() {
    return (
        <>
            <section className="section-box">
                <div className="banner-hero hero-5">
                    <div className="banner-inner-top">
                        <div className="container">
                            <div className="box-banner-center"><Link className="btn btn-brand-5-new" href="#"><span>Novo</span>
                                Tudo em um lugar só
                                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                                    <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="true" />
                                </svg></Link>
                                <h1 className="display-2 mb-30 mt-25 neutral-0">Potencialize sua empresa com monitoramento inteligente</h1>
                                <p className="text-lg neutral-500 mb-55">Capacitando seu negócio a alcançar novos patamares de eficiência e crescimento através de tecnologia de ponta.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

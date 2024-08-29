
import CtaBannerGreen from '@/components/cta/cta-banner-green'

export default function Section5() {
    return (
        <section className="section-box box-our-track-5">
            <div className="container">
                <h2 className="mb-20">O que faz a Performatti ser diferente</h2>
                <div className="row mobile-gap-30">
                    <div className="col-lg-4">
                        <div className="box-border-rounded max-h-lg">
                            <div className="card-casestudy">
                                <div className="card-title">
                                    <h6><span className="number">1</span>Facilidade de uso</h6>
                                </div>
                                <div className="card-desc">
                                    <p>A Performatti é intuitiva e fácil de usar, permitindo que qualquer equipe comece a monitorar e otimizar o desempenho rapidamente, sem complicações.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box-border-rounded max-h-lg">
                            <div className="card-casestudy">
                                <div className="card-title">
                                    <h6><span className="number">2</span>Personalização Completa</h6>
                                </div>
                                <div className="card-desc">
                                    <p>Com a Performatti, você pode personalizar dashboards e relatórios para focar nas métricas mais relevantes para o seu negócio.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box-border-rounded max-h-lg">
                            <div className="card-casestudy ">
                                <div className="card-title">
                                    <h6><span className="number">3</span>Suporte Sempre Disponível</h6>
                                </div>
                                <div className="card-desc">
                                    <p>Nossa equipe de suporte está sempre pronta para ajudar, garantindo que você tenha o apoio necessário em qualquer etapa do processo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-40">
                <CtaBannerGreen
                    key="homePage"
                    title="Explore a Performatti"
                    buttonTittle="Assistir a demonstração"
                    description="Descubra como otimizar o monitoramento de desempenho da sua empresa com a Performatti, garantindo eficiência, controle e previsibilidade em cada decisão estratégica."
                />
            </div>
        </section>

    )
}

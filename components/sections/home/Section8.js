'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Section8() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <section className="section-box box-faqs-4">
                <div className="container">
                    <div className="items-center">
                        <div className="text-center mb-50">
                            <div className="text-white"><span className="flag-title">Perguntas frequentes</span>
                                <h2 className="heading-2 mb-20 mt-20">Você tem alguma dúvida??</h2>
                            </div>
                        </div>
                        <div className='col-lg-8'>
                            <div className="accordion accordion-flush accordion-style-2" id="accordionFAQS">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne" onClick={() => handleClick(1)}>
                                        <button className={isActive.key == 1 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">O que é a Performatti e como ela pode beneficiar minha empresa?</button>
                                    </h2>
                                    <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseOne" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">
                                            <p>A Performatti é uma plataforma inovadora de monitoramento de performance e desempenho, projetada para transformar dados em estratégias eficazes. Ela auxilia sua empresa a identificar oportunidades de melhoria, otimizar processos e maximizar a eficiência operacional. Com a Performatti, você pode tomar decisões informadas e estratégicas, elevando o nível de produtividade e crescimento do seu negócio.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo" onClick={() => handleClick(2)}>
                                        <button className={isActive.key == 2 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">Quais são os planos disponíveis e como eles se diferenciam?</button>
                                    </h2>
                                    <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseTwo" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">A Performatti oferece uma variedade de planos para atender às necessidades específicas de cada empresa. Os planos variam desde o essencial, com funcionalidades básicas para monitoramento, até planos mais avançados que incluem recursos adicionais, como análises detalhadas, relatórios personalizados e suporte prioritário. A escolha do plano ideal depende do nível de monitoramento e suporte que sua empresa necessita para alcançar seus objetivos.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree" onClick={() => handleClick(3)}>
                                        <button className={isActive.key == 3 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Como posso solicitar uma demonstração da Performatti?</button>
                                    </h2>
                                    <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseThree" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">Solicitar uma demonstração da Performatti é simples e rápido. Basta acessar nossa página de contato e preencher o formulário com suas informações de contato e interesse. Nossa equipe entrará em contato para agendar uma demonstração personalizada, onde você poderá explorar todas as funcionalidades da plataforma e ver como ela pode ser implementada na sua empresa para impulsionar resultados.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFour" onClick={() => handleClick(4)}>
                                        <button className={isActive.key == 4 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">Qual é o nível de suporte técnico oferecido?</button>
                                    </h2>
                                    <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseFour" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">Oferecemos suporte técnico para todos os nossos planos, com níveis variando de suporte básico a suporte prioritário 24/7, dependendo do plano escolhido. Nosso suporte inclui assistência para resolver problemas, responder a dúvidas e garantir que você maximize o uso da nossa plataforma. Para detalhes específicos, consulte a descrição do plano escolhido ou entre em contato com nossa equipe de suporte.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full items-center mt-80 mb-40'>
                        <div className='max-w-2xl text-center items-center'>
                            <h2 className='display-4 text-white'>Juntos vamos moldar o futuro da sua empresas com soluções inovadoras e um olhar visionário</h2>
                            <p className='paragraph max-w-lg mt-30'>Somos uma equipe dedicada e apaixonada pela transformação, <br className="none" /> pronta para impulsionar seu sucesso. Conheça o impacto que a sua <br className="none" /> empresa pode ter com a Performatti.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

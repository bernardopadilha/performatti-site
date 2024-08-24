'use client'
import { useState } from 'react'

export default function Section3() {
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
            <div >
              <div className="accordion accordion-flush accordion-style-2" id="accordionFAQS">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne" onClick={() => handleClick(1)}>
                    <button className={isActive.key == 1 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"> Quais são os principais benefícios dos planos da Performatti?</button>
                  </h2>
                  <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseOne" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFAQS">
                    <div className="accordion-body">
                      <p>Discover what sets this apart as the market's easiest and most powerful video
                        interviewing platform, and why hiring managers consistently choose us over
                        the competition. Discover what sets this apart as the market's easiest and
                        most powerful video interviewing platform, and why hiring managers
                        consistently choose us over the competition</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo" onClick={() => handleClick(2)}>
                    <button className={isActive.key == 2 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">Como posso escolher o plano mais adequado para minha empresa?</button>
                  </h2>
                  <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseTwo" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFAQS">
                    <div className="accordion-body">Discover what sets this apart as the market's easiest
                      and most powerful video interviewing platform, and why hiring managers
                      consistently choose us over the competition. Discover what sets this apart as
                      the market's easiest and most powerful video interviewing platform, and why
                      hiring managers consistently choose us over the competition</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree" onClick={() => handleClick(3)}>
                    <button className={isActive.key == 3 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">O que está incluído na demonstração gratuita?</button>
                  </h2>
                  <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseThree" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFAQS">
                    <div className="accordion-body">Discover what sets this apart as the market's easiest
                      and most powerful video interviewing platform, and why hiring managers
                      consistently choose us over the competition. Discover what sets this apart as
                      the market's easiest and most powerful video interviewing platform, and why
                      hiring managers consistently choose us over the competition</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingFour" onClick={() => handleClick(4)}>
                    <button className={isActive.key == 4 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">Como funciona o suporte técnico para os planos da Performatti?</button>
                  </h2>
                  <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseFour" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFAQS">
                    <div className="accordion-body">O suporte técnico varia conforme o plano escolhido. Todos os planos incluem acesso a suporte técnico para resolver problemas e responder a dúvidas. Planos mais avançados, como o Plano Enterprise ou o plano Premium, oferecem suporte prioritário 24/7, garantindo assistência imediata e especializada sempre que necessário.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

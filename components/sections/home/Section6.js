'use client'

import { CardPlan } from "@/components/elements/CardPlan";
import { plans } from "@/util/plan-json";
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
        nextEl: ".custom-swiper-button-next",
        prevEl: ".custom-swiper-button-prev",
    },
    autoplay: {
        delay: 10000
    },
    breakpoints: {
        1199: {
            slidesPerView: 3
        },
        800: {
            slidesPerView: 2
        },
        400: {
            slidesPerView: 1
        },
        250: {
            slidesPerView: 1
        }
    }
}

export default function Section6() {
    return (
        <section className="section-box box-our-track-5 hero-5">
            <div className="container">
                <div className="text-center container">
                    <h2 className='display-4 text-white'>Escolha o melhor plano para sua empresa</h2>

                    <div className="row mt-50">
                        <form className="col-lg-2 col-md-6 text-white">
                            <h4 className="sub-title">Escolha seu Plano</h4>

                            <div className="changes-plan mt-20">
                                <label className="custom-radio">
                                    <input type="radio" name="plan" value="anual" defaultChecked />
                                    <span></span>
                                    <p className="select-plan-title">Plano Anual</p>
                                </label>
                            </div>

                            <p className="description-plan ml-30">Desconto de 25% - Disponível até Novembro 2024</p>

                            <div className="changes-plan mt-10">
                                <label className="custom-radio">
                                    <input type="radio" name="plan" value="mensal" />
                                    <span></span>
                                    <p className="select-plan-title">Plano Mensal</p>
                                </label>
                            </div>

                            <p className="description-plan mt-30">Consulte um especialista para encontrar a melhor opção e maximize os benefícios da Performatti.</p>
                        </form>

                        <div className="col-lg-10 flex-center gap-10 mt-plan-50">
                            <button className="custom-swiper-button-prev">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M0 10.9993L3.5209 14.5203V11.6924H22V10.3064H3.5209V7.47852L0 10.9993Z" fill="true" />
                                </svg>
                            </button>
                            <Swiper {...swiperOptions}>
                                {plans.map((plan, index) => (
                                    <SwiperSlide key={index}>
                                        <CardPlan title={plan.title} iconUrl={plan.iconUrl} topics={plan.topics} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <button className="custom-swiper-button-next">
                                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                                    <path d="M22 10.9993L18.4791 7.47852V10.3064H0V11.6924H18.4791V14.5203L22 10.9993Z" fill="true" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

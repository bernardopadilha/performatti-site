import VideoPopup from "@/components/elements/VideoPopup";

export default function Section9() {
    return (
        <>
            <section className="section-box ">
                <div className="container items-center">
                    <div className="box-image-rect">
                        <img src="/video-image.png" alt="Performatti" />
                        <VideoPopup />
                    </div>

                    <div className="flex-center">
                        <div className="mb-40 max-w-lg">
                            <h2 className="heading-2 mb-20">Pronto para elevar o desempenho da sua empresa?</h2>
                            <p className="text-lg neutral-700">A Performatti está aqui para impulsionar o crescimento e a eficiência do seu negócio com soluções tecnológicas avançadas e personalizadas. Estamos prontos para entender suas necessidades e oferecer as ferramentas certas para otimizar processos, maximizar resultados e transformar a gestão da sua empresa. </p>
                            <p className="text-lg neutral-700 spacing-top-3">Entre em contato conosco e descubra como podemos levar sua empresa a novos patamares de sucesso.</p>
                        </div>
                        <div className="mb-40">
                            <img src="/woman-clipboard.png" alt="Performatti" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

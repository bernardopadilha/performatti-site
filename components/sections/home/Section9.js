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

                    <div className="row align-items-center">
                        <div className="col-lg-6 mt-mobile-50">
                            <div className="box-padding-left-50">
                                <h2 className="heading-3 mb-20">Tudo o que você precisa, na palma da mão</h2>
                                <p className="text-lg neutral-700">Chega de ficar no escuro sobre o desempenho da sua equipe. O app da Performatti oferece tudo o que você precisa para monitorar o desenvolvimento e a produtividade do seu time em tempo real, proporcionando uma visão clara e detalhada das operações, Onde quer que você esteja.</p>
                                <p className="text-lg neutral-700 spacing-top-3">Com a Performatti, a gestão eficiente está ao seu alcance a qualquer momento.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 ml-100 mb-70">
                            <img src="/woman-clipboard.png" alt="Performatti" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

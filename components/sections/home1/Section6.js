export default function Section6() {
    return (
        <>

            <section className="section-box wow  hero-5">
                <div className="container py-50">
                    <div className="text-center mb-70">
                        <h2 className='display-4 text-white'>Escolha o melhor plano para sua empresa</h2>

                        <div className="row">
                            <form className="col-lg-3 col-md-6 text-white">
                                <h4 className="sub-title">Escolha seu Plano</h4>

                                <div className='changes-plan'>
                                    <label className="custom-checkbox">
                                        <input type="checkbox" name="plan" />
                                        <span></span>
                                    </label>
                                    <div className="flex">
                                        <h5>Plano Anual</h5>
                                        <p>Desconto de 25% - Disponível até Novembro 2024</p>
                                    </div>
                                </div>

                                <div className='changes-plan'>
                                    <label className="custom-checkbox">
                                        <input type="checkbox" name="plan" />
                                        <span></span>
                                    </label>
                                    <h5>Plano Mensal</h5>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

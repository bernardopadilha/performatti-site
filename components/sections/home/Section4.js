
import CtaBannerDark from '@/components/cta/cta-banner-dark'

export default function Section4() {
    return (
        <>
           <section className="section-box box-our-track-5 hero-5">
                <CtaBannerDark 
                    key="pageHome" 
                    buttonTittle="Entre em contato"
                    title="Na Performatti tem soluções de monitoramento avançado " 
                    description="Transforme a eficiência da sua empresa com nossas soluções de monitoramento avançado e alcance resultados excepcionais." 
                    href="/contato"
                />
            </section>
        </>
    )
}

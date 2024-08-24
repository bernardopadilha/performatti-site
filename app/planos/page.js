
import Layout from "@/components/layout/Layout"
import Section1 from "@/components/sections/plan/Section1"
import Section2 from "@/components/sections/plan/Section2"
import Section3 from "@/components/sections/plan/Section3"
import Section4 from "@/components/sections/plan/Section4"

export default function Service() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} >
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
            </Layout>
        </>
    )
}

import Section1 from "@/components/blog/sections/Section1"
import Layout from "@/components/layout/Layout"
export default function Blog() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} headerCls="header-style-2 header-style-4" >
                <Section1 />
            </Layout>
        </>
    )
}
import Head from 'next/head'

interface PageHeadProps {
    headTitle: string
}

const PageHead = ({ headTitle }: PageHeadProps) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Name - Nextjs Template"}
                </title>
            </Head>
        </>
    )
}

export default PageHead
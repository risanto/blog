import Nav from './Nav'
import Head from "next/head"

export default function Layout({ pageTitle, children }) {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <div className={"px-8 md:px-16 pt-4 pb-16 max-w-screen-md mx-auto"}>
                <Nav />
                {children}
            </div>
        </>
    )
}

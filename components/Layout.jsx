import Nav from './Nav'
import Footer from './Footer'
import Head from "next/head"

export default function Layout({ pageTitle, children }) {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <div className={"px-8 sm:px-16 pt-4 max-w-screen-md mx-auto flex flex-col h-screen"}>
                <Nav />
                <main className={"mb-auto"}>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}

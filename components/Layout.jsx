import Nav from './Nav'
import Footer from './Footer'
import Head from "next/head"

export default function Layout({ pageTitle, children }) {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <div className={"flex justify-center"}>
                <Nav />
            </div>
            <div className={"px-8 sm:px-16 pt-4 max-w-screen-md mx-auto h-90vh flex flex-col mt-10"}>
                <main className={"mb-auto"}>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}

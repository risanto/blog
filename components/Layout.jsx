import Nav from './Nav'
import Footer from './Footer'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Layout({ children, pageTitle, description, previewImage, siteName }) {
    const router = useRouter()
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />

                <meta name="title" content={pageTitle} />
                <meta name="description" content={description} />

                {/* Open Graph */}
                <meta property="og:url" content={router.pathname} key="ogurl" />
                <meta property="og:image" content={previewImage ? previewImage : "/img/r-logo.png"} key="ogimage" />
                <meta property="og:site_name" content={siteName} key="ogsitename" />
                <meta property="og:title" content={pageTitle} key="ogtitle" />
                <meta property="og:description" content={description} key="ogdesc" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" key="twcard" />
                
                <link rel="icon" href={"img/r-logo.png"}
                    type="image/x-icon" />
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

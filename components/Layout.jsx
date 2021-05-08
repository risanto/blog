import Nav from './Nav'
import Footer from './Footer'

import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Layout({ children, pageTitle, description, previewImage, siteName }) {
    const { asPath } = useRouter()
    const url = 'https://risan.dev'

    const imageLink = previewImage
        ? previewImage.includes('http')
            ? previewImage // when the image is from external url
            : `${url}/${previewImage}` // when the image is local
        : `${url}/img/r-logo.png` // when there's no preview image

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />

                <meta name="title" content={pageTitle} />
                <meta name="description" content={description} />

                {/* Open Graph */}
                <meta property="og:url" content={url + asPath} key="ogurl" />
                <meta property="og:image" content={imageLink} key="ogimage" />
                <meta property="og:site_name" content={siteName ? siteName : 'risan.dev'} key="ogsitename" />
                <meta property="og:title" content={pageTitle} key="ogtitle" />
                <meta property="og:description" content={description} key="ogdesc" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" key="twcard" />

                <link rel="icon" href={"img/r-logo.png"} type="image/x-icon" />
                <title>{pageTitle}</title>
                
                {/*  Google Console */}
                <meta name="google-site-verification" content="wFzmqB_u3xfCcWuiOfPHFeETHAkSXN2aTnzRxV_s0uA" />

                {/* Sankey */}
                <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
                <script type="text/javascript" src="/js/sankey.js"></script>
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

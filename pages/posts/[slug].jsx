import { getAllPostIds, getPostData } from '../../lib/posts'
import { getAuthor, getLanguage, getTags } from '../../lib/meta'

import Layout from '../../components/Layout'
import TagList from '../../components/TagList'

import { useEffect, useState } from 'react'

export default function Post(props) {
    const { postData } = props

    function formatImgSrc(thumbnail) {
        return thumbnail.includes('http')
            ? thumbnail : `/${thumbnail}`
    }

    let date = new Date(postData.date)
    date = date.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })

    // When the user clicks on the button, scroll to the top of the document
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        const scrollToTopBtn = document.getElementById("scrollToTopBtn")

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () { scrollFunction() }

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = "block"
            } else {
                scrollToTopBtn.style.display = "none"
            }
        }
    }, [])


    const [scrollPosition, setScrollPosition] = useState(0)

    // Calculates the scroll distance
    function calculateScrollDistance() {
        const scrollTop = window.pageYOffset
        const windowHeight = window.innerHeight

        const docHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        )

        const totalDocScrollLength = docHeight - windowHeight

        setScrollPosition(Math.floor(scrollTop / totalDocScrollLength * 100))
    }

    // Listen to page scroll
    function listenToScrollEvent() {
        document.addEventListener("scroll", () => {
            requestAnimationFrame(() => {
                calculateScrollDistance()
            })
        })

        document.getElementById("progressBar").style.height = scrollPosition + "%"
    }

    useEffect(() => {
        listenToScrollEvent()
    }, [scrollPosition])

    return (
        <Layout
            pageTitle={postData.title}
            description={postData.description}
            previewImage={postData.thumbnail}
        // siteName={}
        >
            <header>
                <h1 className={"font-bold text-4xl dark:text-white"}>{postData.title}</h1>

                <div className={"mt-4 flex justify-between"}>
                    <p className={"text-gray-700 dark:text-gray-400"}>{postData.author.name} / {date}
                    </p>
                    <p className={"text-gray-700 dark:text-gray-400"}>{postData.readingTime.text}</p>
                </div>

                <img
                    className={"mt-4"}
                    src={formatImgSrc(postData.thumbnail)}
                />
                <div className={"pt-2 relative -top-4 -right-1"}>
                    <TagList tags={postData.tags} rowReverse={true} withBackground={true} />
                </div>
            </header>
            <article
                className={"cms-content"}
                dangerouslySetInnerHTML={
                    { __html: postData.contentHtml }
                }>
            </article>
            <button
                id={"scrollToTopBtn"}
                className={"h-8 w-8 fixed bottom-5 left-5 bg-white shadow rounded"}
                onClick={scrollToTop}
            >
                <div
                    id={"progressBar"}
                    className={"bg-indigo-100 absolute bottom-0 w-full rounded"}
                >
                </div>
                <img
                    id={"progressBar"}
                    className={"fixed bottom-6 left-6"}
                    src={"/img/arrow-up.svg"}
                />
            </button>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    let postData = await getPostData(params.slug)
    postData.author = getAuthor(postData.author)
    postData.language = getLanguage(postData.language)
    postData.tags = getTags(postData.tags)

    return {
        props: { postData }
    }
}

export async function getStaticPaths() {
    return {
        paths: getAllPostIds(),
        fallback: false
    }
}
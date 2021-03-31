import { getAllPostIds, getPostData } from '../../lib/posts'
import { getAuthor, getLanguage, getTags } from '../../lib/meta'
import Layout from '../../components/Layout'

export default function Post(props) {
    const { postData } = props

    function formatImgSrc(thumbnail) {
        return thumbnail.includes('http')
            ? thumbnail : `/${thumbnail}`
    }

    return (
        <Layout>
            <article className={"p-4"}>
                <header>
                    <h1 className={"font-bold text-xl"}>{postData.title}</h1>
                    <p className={"text-gray-500"}>{postData.date}</p>
                    <img
                        src={formatImgSrc(postData.thumbnail)}
                    />
                </header>
                <div
                    className={"cms-content"}
                    dangerouslySetInnerHTML={
                        { __html: postData.contentHtml }
                    }>
                </div>
            </article>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    let postData = await getPostData(params.slug)
    postData.author = await getAuthor(postData.author)
    postData.language = await getLanguage(postData.language)
    postData.tags = await getTags(postData.tags)

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
import { getAllPostIds, getPostData } from '../../lib/posts'
import { getAuthor, getLanguage, getTags } from '../../lib/meta'
import Layout from '../../components/Layout'
import TagList from '../../components/TagList'

export default function Post(props) {
    const { postData } = props

    function formatImgSrc(thumbnail) {
        return thumbnail.includes('http')
            ? thumbnail : `/${thumbnail}`
    }

    let date = new Date(postData.date)
    date = date.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })

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
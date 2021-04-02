import { getAllPostIds, getPostData } from '../../lib/posts'
import { getAuthor, getLanguage, getTags } from '../../lib/meta'
import Layout from '../../components/Layout'
import TagItem from '../../components/TagItem'

export default function Post(props) {
    const { postData } = props

    function formatImgSrc(thumbnail) {
        return thumbnail.includes('http')
            ? thumbnail : `/${thumbnail}`
    }

    let date = new Date(postData.date)
    date = date.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })

    return (
        <Layout>
            <article>
                <header>
                    <h1 className={"font-bold text-4xl dark:text-white"}>{postData.title}</h1>
                    <p className={"text-gray-700 dark:text-gray-400 mt-4"}>{postData.author.name} / {date}
                    </p>
                    <img
                        className={"mt-4"}
                        src={formatImgSrc(postData.thumbnail)}
                    />
                    <div className={"pt-2 text-gray-600"}>
                        <ul className={"flex justify-end"}>
                            {postData.tags.map((tag, idx) => {
                                return <li key={idx}>
                                    <TagItem tag={tag} />
                                </li>
                            })}
                        </ul>
                    </div>
                </header>
                <main
                    className={"cms-content"}
                    dangerouslySetInnerHTML={
                        { __html: postData.contentHtml }
                    }>
                </main>
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
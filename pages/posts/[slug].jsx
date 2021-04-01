import { getAllPostIds, getPostData } from '../../lib/posts'
import { getAuthor, getLanguage, getTags } from '../../lib/meta'
import Layout from '../../components/Layout'

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
            <article className={"p-4"}>
                <header>
                    <h1 className={"font-bold text-xl"}>{postData.title}</h1>
                    <p className={"text-gray-700"}>{postData.author.name} / {date}
                    </p>
                    <img
                        className={"mt-4"}
                        src={formatImgSrc(postData.thumbnail)}
                    />
                </header>
                <section
                    className={"cms-content"}
                    dangerouslySetInnerHTML={
                        { __html: postData.contentHtml }
                    }>
                </section>
                <section className={"py-10"}>
                    <ul className={"float-right"}>
                        {postData.tags.map(tag => {
                            return <li>#{tag.name}</li>
                        })}
                    </ul>
                </section>
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
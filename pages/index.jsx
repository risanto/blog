import Head from "next/head"
import Layout from '../components/Layout'
import PostItem from '../components/PostItem'
import { fetchAllPostContent } from '../lib/posts'
import { getAllLanguages, getAllTags } from '../lib/meta'

export default function Index({ posts, languages, tags }) {
    return (
        <>
            <Head>
                <title>Risan's Blog</title>
            </Head>
            <Layout>
                <main>
                    <ul>
                        <li>All</li>
                        {languages.map((language, idx) => {
                            return <li key={idx}>
                                {language.slug}
                            </li>
                        })}
                    </ul>
                    <ul>
                        {tags.map((tag, idx) => {
                            return <li key={idx}>
                                {tag.name}
                            </li>
                        })}
                    </ul>
                    <ul>
                        {posts.map((post, idx) => {
                            return <li key={idx}>
                                <PostItem post={post} />
                            </li>
                        })}
                    </ul>
                </main>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const posts = fetchAllPostContent()
    const languages = await getAllLanguages()
    const tags = await getAllTags()

    return {
        props: {
            posts, languages, tags
        }
    }
}
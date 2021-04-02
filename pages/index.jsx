import Head from "next/head"
import Layout from '../components/Layout'
import PostItem from '../components/PostItem'
import TagItem from '../components/TagItem'
import { fetchAllPostContent } from '../lib/posts'
import { getAllLanguages, getAllTags } from '../lib/meta'
import { useRouter } from 'next/router'

export default function Index({ posts, languages, tags }) {
    const { query } = useRouter()

    return (
        <>
            <Head>
                <title>Risan's Blog</title>
            </Head>
            <Layout>
                <main>
                    <ul>
                        <li key={"all"}>All</li>
                        {languages.map((language) => {
                            return <li key={language.slug}>
                                {language.slug}
                            </li>
                        })}
                    </ul>
                    <ul className={"flex"}>
                        {tags.map((tag, idx) => {
                            return <li key={idx}>
                            <TagItem tag={tag}/>
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
    const posts = await fetchAllPostContent()
    const languages = await getAllLanguages()
    const tags = await getAllTags()

    return {
        props: {
            posts, languages, tags
        }
    }
}
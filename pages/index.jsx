import Head from "next/head"

import Layout from '../components/Layout'
import PostItem from '../components/PostItem'
import TagItem from '../components/TagItem'
import TagList from '../components/TagList'

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
                    <section className={"flex"}>
                        <ul>
                            <li key={"all"}>All</li>
                            {languages.map((language) => {
                                return <li key={language.slug}>
                                    {language.slug}
                                </li>
                            })}
                        </ul>
                        <TagList tags={tags} />
                    </section>
                    <section>
                        <ul>
                            {posts.map((post, idx) => {
                                return <li
                                    className={"mt-8"}
                                    key={idx}
                                >
                                    <PostItem post={post} />
                                </li>
                            })}
                        </ul>
                    </section>
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
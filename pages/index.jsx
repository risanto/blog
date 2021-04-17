import Head from "next/head"

import Layout from '../components/Layout'
import PostItem from '../components/PostItem'
import LanguageDropdown from '../components/LanguageDropdown'
import TagList from '../components/TagList'

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
                    {/* Languages & tags */}
                    <section className={"flex"}>
                        <LanguageDropdown languages={languages} />
                        {/* <ul>
                            <li key={"all"}>All</li>
                            {languages.map((language) => {
                                return <li key={language.slug}>
                                    {language.slug}
                                </li>
                            })}
                        </ul> */}
                        <img
                            className={"bg-indigo-50 rounded-l p-1"}
                            src="/img/tag.svg" height={25} width={25}
                        />
                        <TagList tags={tags} />
                    </section>

                    {/* Posts */}
                    <section className={"mt-16"}>
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
    const tags = await getAllTags()
    let languages = await getAllLanguages()

    languages.push({ slug: 'all', name: 'All' })

    return {
        props: {
            posts, languages, tags
        }
    }
}
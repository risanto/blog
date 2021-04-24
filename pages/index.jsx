import Layout from '../components/Layout'
import PostItem from '../components/PostItem'
import LanguageDropdown from '../components/LanguageDropdown'
import TagList from '../components/TagList'

import { fetchAllPostContent } from '../lib/posts'
import { getAllLanguages, getAllTags } from '../lib/meta'

import { useRouter } from 'next/router'

export default function Index({ posts, languages, tags }) {
    const router = useRouter()
    const query = router.query

    if (query.language && query.language !== 'all') {
        posts = posts.filter(post => {
            return post.data.language === query.language
        })
    }

    if (query.tag) {
        posts = posts.filter(post => {
            return post.data.tags.filter(tag => {
                return tag.slug === query.tag
            }).length
        })
    }

    return (
        <Layout
            pageTitle={"Risan's Blog"}
            description={"Writings about programming and personal development."}
            // previewImage={}
            // siteName={}
        >
            <section className={"mt-4"}>
                <h1 className={"text-xl bg-indigo-50 inline-block text-gray-700 pr-1"}
                >Hello, I'm Risan :)</h1>

                <p className={"mt-2"}>I'm a full stack developer who likes to write about programming and personal development. I just recently started this blog so expect more contents to come!</p>
            </section>

            <section className={"flex mt-6"}>
                {/* Languages */}
                <LanguageDropdown languages={languages} />

                {/* Tags */}
                <img
                    className={"place-self-center bg-indigo-50 rounded-l p-1 w-6"}
                    style={{ height: '1.5rem'}}
                    src="/img/tag.svg" height={25} width={25}
                />
                <TagList tags={tags} />
            </section>

            {/* Posts */}
            <section className={"mt-10"}>
                {!!posts.length && (
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
                )}

                {!posts.length && (
                    <p className={"text-center"}
                    >No posts found.</p>
                )}
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const posts = await fetchAllPostContent()
    let tags = await getAllTags()
    let languages = await getAllLanguages()

    languages.push({ slug: 'all', name: 'All' })
    tags.unshift({ slug: 'all', name: 'all' })

    return {
        props: {
            posts, languages, tags
        }
    }
}
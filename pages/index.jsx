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
                <h1 className={"rounded-tl-lg rounded-br-lg text-xl bg-indigo-50 inline-block py-1 px-2 dark:text-black"}
                >Hello, I'm Risan :)</h1>

                <p className={"mt-2 relative left-2 pr-2 md:pr-6 inline-block"}>I'm a full stack developer who likes to write about programming and personal development. I just recently started this blog so expect more contents to come!</p>
            </section>

            <section className={"flex mt-6"}>
                {/* Languages */}
                <LanguageDropdown languages={languages} />

                {/* Tags */}
                <svg //img/tag.svg
                    className={"place-self-center bg-indigo-50 rounded-l p-1 -ml-4 sm:ml-2"}
                    fill="none" height={'1.6rem'}
                    style={{ minWidth: '25px' }}
                    stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" x2="7" y1="7" y2="7" />
                </svg>
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
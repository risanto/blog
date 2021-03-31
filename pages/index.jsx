import Head from "next/head"
import Layout from '../components/Layout'
import PostItem from '../components/PostItem'
import { fetchAllPostContent } from '../lib/posts'

export default function Index({ posts }) {
    return (
        <>
            <Head>
              <title>Risan's Blog</title>
            </Head>
            <Layout>
              <main>
                <ul>
                    {posts.map((post, idx) => {
                        return <li key={idx}>
                            <PostItem post={post}/>
                        </li>
                    })}
                </ul>
              </main>
            </Layout>
        </>
    )
}

export async function getStaticProps () {
    const posts = fetchAllPostContent()

    return {
        props: {
            posts
        }
    }
}
import Link from 'next/link'
import TagItem from './TagItem'

export default function PostItem({ post }) {
    let date = new Date(post.data.date)
    date = date.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })

    return (
        <>
            <Link href={"/posts/" + post.data.slug}>
                <a>
                    <img src={post.data.thumbnail} />
                    <h2>{post.data.title}</h2>
                    <p>{date}</p>
                </a>
            </Link>
            <ul className={"flex justify-end"}>
                {post.data.tags.map((tag, idx) => {
                    return <li
                        key={idx}
                    >
                        <TagItem tag={tag} />
                    </li>
                })}
            </ul>
        </>
    )
}

import Link from 'next/link'
import TagItem from './TagItem'

export default function PostItem({ post }) {
    let date = new Date(post.data.date)
    date = date.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })

    return (
        <div className={"hover:border rounded"}>
            <Link href={"/posts/" + post.data.slug}>
                <a>
                    <img src={post.data.thumbnail} />
                    <div className={"px-2"}>
                        <h2
                            className={"font-medium text-xl mt-2"}
                        >{post.data.title}</h2>
                        <p className={"text-sm"}
                        >{date}</p>
                    </div>
                </a>
            </Link>
            <ul className={"flex justify-end p-2"}>
                {post.data.tags.map((tag, idx) => {
                    return <li
                        key={idx}
                    >
                        <TagItem tag={tag} />
                    </li>
                })}
            </ul>
        </div>
    )
}

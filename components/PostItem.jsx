import Link from 'next/link'
import TagItem from './TagItem'

export default function PostItem({ post }) {
    let date = new Date(post.data.date)
    date = date.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })

    return (
        <div className={"border dark:border-gray-700 hover:-translate-y-2 transform transition hover:duration-500 pb-2 rounded"}>
            <Link href={"/posts/" + post.data.slug}>
                <a>
                    <img
                    className={"relative rounded-t"}
                    src={post.data.thumbnail} 
                    />
                    <div className={"px-4 pb-2"}>
                        <h2
                            className={"font-medium text-xl mt-2"}
                        >{post.data.title}</h2>
                        <p className={"text-sm"}
                        >{date}</p>
                        <p>{post.description}</p>
                    </div>
                </a>
            </Link>
            <ul className={"absolute -top-6 right-0 flex justify-end p-2"}>
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

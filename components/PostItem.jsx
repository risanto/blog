import Link from 'next/link'
import TagList from './TagList'

export default function PostItem({ post }) {
    let date = new Date(post.data.date)
    date = date.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })

    return (
        <div className={"border dark:border-gray-700 hover:-translate-y-1 transform transition hover:duration-500 pb-2 rounded"}>
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
                        <h6>{date} • {post.data.readingTime.text}</h6>
                    </div>
                </a>
            </Link>

            <div className={"w-full absolute -top-4 right-0"}>
                <TagList tags={post.data.tags} rowReverse={true} withBackground={true} />
            </div>
        </div>
    )
}

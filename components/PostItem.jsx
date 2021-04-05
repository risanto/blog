import Link from 'next/link'
import TagList from './TagList'

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
                        <p className={"text-sm text-gray-500"}
                        >{date}</p>
                    </div>
                </a>
            </Link>
            {/* <div className={"overflow-x-auto w-full absolute -top-6"}> */}
            <div className={"w-full absolute -top-6 right-0 p-2"}>
                <TagList tags={post.data.tags} rowReverse={true} withBackground={true}/>
            </div>
        </div>
    )
}

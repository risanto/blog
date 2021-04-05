import Link from 'next/link'

export default function TagItem({ tag }) {
    return <div
        className={"bg-indigo-50 dark:bg-purple-900 px-2 hover:bg-indigo-100 dark:hover:bg-purple-800"}
    >
        <Link
        href={"/?tag=" + tag.slug}
        >
            <a>
                #{tag.name}
            </a>
        </Link>
    </div>
}
import Link from 'next/link'

export default function TagItem({ tag, withBackground }) {
    return <div
        className={" whitespace-nowrap px-2 hover:bg-indigo-100 dark:hover:bg-purple-800 " + ( withBackground && "bg-indigo-50 dark:bg-purple-900")}
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
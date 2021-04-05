import Link from 'next/link'

export default function TagItem({ tag, withBackground }) {
    return <div
        className={"place-self-center whitespace-nowrap px-1 " + ( withBackground ? "bg-indigo-50 dark:bg-purple-900 hover:bg-indigo-100 dark:hover:bg-purple-800" : "hover:bg-indigo-50 dark:hover:bg-purple-900")}
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
import Link from 'next/link'

export default function TagItem({ tag, withBackground }) {
    // dark:hover:bg-purple-800
    // dark:bg-purple-900
    return <div
        className={"place-self-center whitespace-nowrap px-2 " + ( withBackground ? "bg-indigo-50 hover:bg-indigo-100 dark:text-gray-700" : "hover:underline")}
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
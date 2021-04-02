import Link from 'next/link'

export default function TagItem({ tag }) {
    return <div
        className={"bg-indigo-50 hover:bg-indigo-100 rounded highlighted-link px-2"}
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
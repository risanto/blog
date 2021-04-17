import useRedirect from '../hooks/useRedirect'

export default function TagItem({ tag, withBackground }) {
    const redirect = useRedirect()

    return <div
        className={"place-self-center whitespace-nowrap px-2 hover:cursor-pointer " + (withBackground ? "bg-indigo-50 hover:bg-indigo-100 dark:text-gray-700" : "hover:underline")}
    >
        <a
            onClick={() => redirect('/', { tag: tag.slug })}
        >
            #{tag.name}
        </a>
    </div>
}
import useRedirect from '../hooks/useRedirect'
import { useRouter } from 'next/router'

export default function TagItem({ tag, withBackground }) {
    const redirect = useRedirect()
    const router = useRouter()
    const routerTag = router.query.tag

    return <div
        className={"rounded-tl rounded-br place-self-center whitespace-nowrap px-2 hover:cursor-pointer " + (withBackground ? "bg-indigo-50 hover:bg-indigo-100 dark:text-gray-700 " : "hover:underline dark:border-gray-500 ") + ((routerTag === tag.slug || (tag.slug === 'all' && !routerTag)) ? "border" : "")}
    >
        {tag.slug === 'all' && (
            <a
                onClick={() => router.push('/')}
            >#{tag.name}</a>
        )}

        {tag.slug !== 'all' && (
            <a
                onClick={() => redirect('/', { tag: tag.slug })}
            >#{tag.name}</a>
        )}

    </div >
}
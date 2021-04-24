import TagItem from './TagItem'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function TagList({ tags, rowReverse, withBackground }) {
    const router = useRouter()
    const routerTag = router.query.tag

    useEffect(() => {
        const element = routerTag
            ? document.querySelector(`#taglist-${routerTag}`)
            : document.querySelector(`#taglist-all`)

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            })
        }
    }, [routerTag])

    return <ul className={"ml-1 flex overflow-x-auto " + (rowReverse ? "flex-row-reverse" : "")}>
        {tags.map((tag, idx) => {
            return <li
                id={"taglist-" + tag.slug}
                className={"flex " + (withBackground ? "ml-2" : "ml-1")}
                key={idx}
            >
                <TagItem tag={tag} withBackground={withBackground} />
            </li>
        })}
    </ul>
}
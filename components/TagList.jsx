import TagItem from './TagItem'

export default function TagList({ tags, rowReverse, withBackground }) {
    return <ul className={"flex overflow-x-auto " + (rowReverse && "flex-row-reverse")}>
        {tags.map((tag, idx) => {
            return <li
                className={"ml-2"}
                key={idx}
            >
                <TagItem tag={tag} withBackground={withBackground}/>
            </li>
        })}
    </ul>
}
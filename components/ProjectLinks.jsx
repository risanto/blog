export default function ProjectLinks({ items }) {
    return (
        <ul className={"mt-2 text-sm float-right flex"}>
            {items.map(item => {
                return (
                    <li key={item.name}>
                        <a
                            className={"hover:underline px-1"}
                            target={"_blank"}
                            href={item.href}
                        >{item.name}</a>
                    </li>
                )
            })}
        </ul>
    )
}
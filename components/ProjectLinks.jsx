import useWindowDimensions from '../hooks/useWindowDimensions'

export default function ProjectLinks({ items }) {
    const { width } = useWindowDimensions()

    return (
        <ul
            className={"mt-6 text-sm inline-block text-right float-right"}
        >
            {items.map((item, idx) => {
                return (
                    <li
                        className={"inline flex-1"}
                        key={item.name}
                    >
                        <a
                            className={"hover:underline px-1"}
                            target={"_blank"}
                            href={item.href}
                        >
                            {item.name}

                            {/* Add breaking space in small viewport to split links more equally */}
                            {( 
                                width < 400 && items.length >= 5
                                && idx === Math.floor(items.length / 2) - 1
                            ) && <br />
                            }
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
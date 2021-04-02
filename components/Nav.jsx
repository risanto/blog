import Link from 'next/link'

export default function Nav() {
    return (
        <nav className={"flex py-2 px-4"}>
            <ul className={"flex"}>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li className={"ml-4"}>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

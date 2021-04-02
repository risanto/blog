import Link from 'next/link'
import { useTheme } from 'next-themes'

export default function Nav() {
    const { theme, setTheme } = useTheme()

    return (
        <nav className={"flex py-2 px-4 justify-between sticky top-0 bg-white dark:bg-black"}>
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
            <button
                aria-label="Toggle Dark Mode"
                type="button"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {theme === 'dark' && (
                    <img
                        height={25} width={25}
                        src={"/img/sun.svg"}
                    />
                )}
                {theme === 'light' && (
                    <img
                        height={25} width={25}
                        src={"/img/moon.svg"}
                    />
                )}
            </button>
        </nav>
    )
}

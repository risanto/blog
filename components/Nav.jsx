import Link from 'next/link'
import { useTheme } from 'next-themes'

export default function Nav() {
    const { theme, setTheme } = useTheme()

    return (
        <nav className={"flex py-4 px-2 justify-between sticky top-0 bg-white dark:bg-black max-w-screen-md mx-auto"}>
            <ul className={"flex"}>
                <li>
                    <Link href="/">
                        <a
                        className={"hover:underline p-1"}
                        >Home</a>
                    </Link>
                </li>
                <li className={"hover:underline ml-4"}>
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

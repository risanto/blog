import Link from 'next/link'
import { useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function Nav() {
    const { theme, setTheme } = useTheme()

    function renderSunIcon() {
        return <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
            <g>
                <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1" />
            </g>
            <g>
                <title>Layer 1</title>
                <circle id="svg_1" r="5" fill="#ffffff" cy="12" cx="12" />
                <path id="svg_2" fill="#ffffff" d="m21,13l-1,0a1,1 0 0 1 0,-2l1,0a1,1 0 0 1 0,2z" />
                <path id="svg_3" fill="#ffffff" d="m4,13l-1,0a1,1 0 0 1 0,-2l1,0a1,1 0 0 1 0,2z" />
                <path id="svg_4" fill="#ffffff" d="m17.66,7.34a1,1 0 0 1 -0.66,-0.29a1,1 0 0 1 0,-1.41l0.71,-0.71a1,1 0 1 1 1.41,1.41l-0.71,0.71a1,1 0 0 1 -0.75,0.29z" />
                <path id="svg_5" fill="#ffffff" d="m5.64,19.36a1,1 0 0 1 -0.71,-0.29a1,1 0 0 1 0,-1.41l0.71,-0.66a1,1 0 0 1 1.41,1.41l-0.71,0.71a1,1 0 0 1 -0.7,0.24z" />
                <path id="svg_6" fill="#ffffff" d="m12,5a1,1 0 0 1 -1,-1l0,-1a1,1 0 0 1 2,0l0,1a1,1 0 0 1 -1,1z" />
                <path id="svg_7" fill="#ffffff" d="m12,22a1,1 0 0 1 -1,-1l0,-1a1,1 0 0 1 2,0l0,1a1,1 0 0 1 -1,1z" />
                <path id="svg_8" fill="#ffffff" d="m6.34,7.34a1,1 0 0 1 -0.7,-0.29l-0.71,-0.71a1,1 0 0 1 1.41,-1.41l0.71,0.71a1,1 0 0 1 0,1.41a1,1 0 0 1 -0.71,0.29z" />
                <path id="svg_9" fill="#ffffff" d="m18.36,19.36a1,1 0 0 1 -0.7,-0.29l-0.66,-0.71a1,1 0 0 1 1.36,-1.36l0.71,0.71a1,1 0 0 1 0,1.41a1,1 0 0 1 -0.71,0.24z" />
            </g>
        </svg>
    }

    function renderMoonIcon() {
        return <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.21,15.32A8.56,8.56,0,1,1,11.29,3.5a.5.5,0,0,1,.51.28.49.49,0,0,1-.09.57A6.46,6.46,0,0,0,9.8,9a6.57,6.57,0,0,0,9.71,5.72.52.52,0,0,1,.58.07A.52.52,0,0,1,20.21,15.32Z" fill="#464646" />
        </svg>
    }

    return (
        <nav className={"w-full z-10 flex py-4 justify-between fixed top-0 bg-white dark:bg-gradient-to-r dark:bg-black max-w-screen-md mx-auto px-8"}>
            <ul className={"flex"}>
                <li
                    className={"hover:underline hover:cursor-pointer"}
                >
                    <Link href="/">
                        <h2>Blog</h2>
                    </Link>
                </li>
                <li
                    className={"hover:underline ml-4 hover:cursor-pointer"}
                >
                    <Link href="/about">
                        <h2>About</h2>
                    </Link>
                </li>
            </ul>
            <button
                aria-label="Toggle Dark Mode"
                type="button"
                suppressHydrationWarning={true}
                onClick={() => setTheme(theme === 'dark' || theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark')}
            >
                {(theme === 'dark' || theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
                    ? renderSunIcon()
                    : renderMoonIcon()
                }
            </button>
        </nav>
    )
}

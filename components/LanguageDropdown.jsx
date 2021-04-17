import React, { useEffect, useState } from 'react'
import { createPopper } from '@popperjs/core'

import Link from 'next/link'
import { useRouter } from 'next/router'

import useComponentVisible from '../hooks/useComponentVisible'

export default function LanguageDropdown({ languages }) {
    const [activeLanguageName, setActiveLanguageName] = useState('All')

    const router = useRouter()
    const { ref, btnRef, isComponentVisible, setIsComponentVisible } = useComponentVisible(false) // starts invisible
    console.log(router)

    const btnDropdownRef = btnRef // the component that influences popover dropdown's appearance
    const popoverDropdownRef = ref // the component that'll appear/disappear

    // close popover & set active language whenever language is changed
    useEffect(() => {
        if (router.query.language) {
            setActiveLanguageName(router.query.language)
        }

        setIsComponentVisible(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.query.language])

    useEffect(() => {
        // place the popover dropdown belows the button whenever it's visible
        if (isComponentVisible) {
            createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
                placement: "bottom-start"
            })
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isComponentVisible])

    return (
        <>
            <div className="flex mr-6 sm:mr-1">
                <div className="relative inline-flex align-middle">
                    <button
                        className={"flex"}
                        type="button"
                        ref={btnDropdownRef}
                    >
                        <img
                            className={"place-self-center bg-indigo-50 p-1 rounded-l"}
                            src={"/img/language.svg"}
                            width={25} height={25}
                        />
                        <p className={"place-self-center mx-1 px-1 hover:underline"}>
                            {activeLanguageName}▼
                        </p>
                    </button>
                    <div ref={popoverDropdownRef}>
                        {isComponentVisible && (
                            <div
                                className={
                                    "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
                                }
                                style={{ minWidth: "12rem" }}
                            >
                                <ul>
                                    {languages.length && languages.map((language) => {
                                        if (language.name !== activeLanguageName) {
                                            return <li key={language.slug}>
                                                <Link
                                                    href={`/?language=${language.name}`}
                                                    className={
                                                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap"
                                                    }
                                                >
                                                    {language.name}
                                                </Link>
                                            </li>
                                        }

                                        return <li key={playlist.id}></li>
                                    })}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
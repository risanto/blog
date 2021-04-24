import React, { useEffect, useState } from 'react'
import { createPopper } from '@popperjs/core'
import { useRouter } from 'next/router'

import useComponentVisible from '../hooks/useComponentVisible'
import useRedirect from '../hooks/useRedirect'

export default function LanguageDropdown({ languages }) {
    const [activeLanguage, setActiveLanguage] = useState({ slug: 'all', name: 'All' })

    const router = useRouter()
    const redirect = useRedirect()
    
    const { ref, btnRef, isComponentVisible, setIsComponentVisible } = useComponentVisible(false) // starts invisible

    const btnDropdownRef = btnRef // the component that influences popover dropdown's appearance
    const popoverDropdownRef = ref // the component that'll appear/disappear

    // close popover & set active language whenever language is changed
    useEffect(() => {
        if (router.query.language) {
            const language = languages.find(language => {
                return language.slug === router.query.language
            })

            setActiveLanguage(language)
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
                            {activeLanguage.name}▼
                        </p>
                    </button>
                    <div
                        ref={popoverDropdownRef}
                        style={{ zIndex: 10 }}
                    >
                        {isComponentVisible && (
                            <div
                                className={
                                    "bg-white text-base float-left py-2 list-none text-left rounded shadow-lg mt-1"
                                }
                                style={{ minWidth: "7rem" }}
                            >
                                <ul>
                                    {languages.length && languages.map((language) => {
                                        if (language.name !== activeLanguage.name) {
                                            return <li key={language.slug}>
                                                <a
                                                    onClick={() => {
                                                        redirect('/', { language: [language.slug] })
                                                    }}
                                                    className={
                                                        "hover:cursor-pointer hover:underline text-sm py-2 px-4 font-normal block w-full whitespace-nowrap"
                                                    }
                                                >
                                                    {language.name}
                                                </a>
                                            </li>
                                        }

                                        return <li key={language.slug}></li>
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
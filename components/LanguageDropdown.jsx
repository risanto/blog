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
                        <svg 
                        className={"place-self-center bg-indigo-50 p-1 rounded-l"}
                        width={25} height={25}
                        data-name="Layer 1" id="Layer_1" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39,18.67H35.42l-4.2,11.12A29,29,0,0,1,20.6,24.91a28.76,28.76,0,0,0,7.11-14.49h5.21a2,2,0,0,0,0-4H19.67V2a2,2,0,1,0-4,0V6.42H2.41a2,2,0,0,0,0,4H7.63a28.73,28.73,0,0,0,7.1,14.49A29.51,29.51,0,0,1,3.27,30a2,2,0,0,0,.43,4,1.61,1.61,0,0,0,.44-.05,32.56,32.56,0,0,0,13.53-6.25,32,32,0,0,0,12.13,5.9L22.83,52H28l2.7-7.76H43.64L46.37,52h5.22Zm-15.3-8.25a23.76,23.76,0,0,1-6,11.86,23.71,23.71,0,0,1-6-11.86Zm8.68,29.15,4.83-13.83L42,39.57Z"/>
                            </svg>
                        <p className={"place-self-center mx-1 px-1 hover:underline h-7 leading-7"}>
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
                                                        "hover:cursor-pointer hover:underline text-sm py-2 px-4 font-normal block w-full whitespace-nowrap text-gray-700"
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
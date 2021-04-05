import React from "react";
import { createPopper } from "@popperjs/core";

export default function LanguageDropdown({ color }) {
    if (!color) color = 'white'

    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };

    // bg colors
    let bgColor;
    color === "white"
        ? (bgColor = "bg-blueGray-700")
        : (bgColor = "bg-" + color + "-500");
    return (
        <>
            <div className="flex flex-wrap mr-6 sm:mr-1">
                <div className="relative inline-flex w-full align-middle">
                    <button
                        className={"flex"}
                        type="button"
                        ref={btnDropdownRef}
                        onClick={() => {
                            dropdownPopoverShow
                                ? closeDropdownPopover()
                                : openDropdownPopover();
                        }}
                    >
                        <img
                            className={"place-self-center bg-indigo-50 p-1 rounded-l"}
                            src={"/img/language.svg"}
                            width={25} height={25}
                        />
                        <p className={"place-self-center mx-1 px-1 hover:underline"}>
                            All
                        </p>
                    </button>
                    <div
                        ref={popoverDropdownRef}
                        className={
                            (dropdownPopoverShow ? "block " : "hidden ") +
                            (color === "white" ? "bg-white " : bgColor + " ") +
                            "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
                        }
                        style={{ minWidth: "12rem" }}
                    >
                        <a
                            href="#pablo"
                            className={
                                "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                                (color === "white" ? " text-blueGray-700" : "text-white")
                            }
                            onClick={e => e.preventDefault()}
                        >
                            Action
              </a>
                        <a
                            href="#pablo"
                            className={
                                "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                                (color === "white" ? " text-blueGray-700" : "text-white")
                            }
                            onClick={e => e.preventDefault()}
                        >
                            Another action
              </a>
                        <a
                            href="#pablo"
                            className={
                                "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                                (color === "white" ? " text-blueGray-700" : "text-white")
                            }
                            onClick={e => e.preventDefault()}
                        >
                            Something else here
              </a>
                        <div className="h-0 my-2 border border-t-0 border-solid opacity-25 border-blueGray-800" />
                        <a
                            href="#pablo"
                            className={
                                "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                                (color === "white" ? " text-blueGray-700" : "text-white")
                            }
                            onClick={e => e.preventDefault()}
                        >
                            Seprated link
              </a>
                    </div>
                </div>
            </div>
        </>
    )
}
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import Logo from "/public/logo.svg";
import HamburgerIcon from "/public/Hamburger.svg";
import Button from "./Button";

export default function Nav() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <>
            <header className="relative px-4 md:px-20 md:pt-2 bg-gradientBlue1 z-50">
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-1 md:gap-2">
                        <Image
                            src={Logo}
                            alt="Overshine Logo"
                            className="size-16 md:size-full"
                        />
                        <div className="flex flex-col items-center max-w-min relative top-1">
                            <span className="text-lg md:text-2xl leading-none text-primaryColor uppercase font-black">
                                Overshine
                            </span>
                            <span className="text-[0.65rem] md:text-sm leading-none text-secondaryColor uppercase font-extrabold">
                                General services
                            </span>
                        </div>
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex gap-10 items-center capitalize font-semibold">
                            <Link href="#Hero">Home</Link>
                            <Link href="#AboutUs">About us</Link>
                            <Link href="#WorkingProcess">Process</Link>
                            <Link href="#Services">Services</Link>
                        </ul>
                    </nav>
                    <Button
                        props={{
                            text: "contact us",
                            isLink: true,
                            Link: "#ContactUs",
                            className: "hidden md:block",
                        }}
                    />
                    <button
                        onClick={() => setMobileNavOpen(true)}
                        type="button"
                        className={`md:hidden ${
                            mobileNavOpen ? "hidden" : "block"
                        }`}
                    >
                        <Image src={HamburgerIcon} alt="Hamburger Menu" />
                    </button>
                    <button
                        onClick={() => setMobileNavOpen(false)}
                        className={`md:hidden ${
                            mobileNavOpen ? "block" : "hidden"
                        }`}
                    >
                        <X />
                    </button>
                </div>
                <div
                    className={`absolute left-0 right-0 bg-gradientBlue1 transition-all duration-300 overflow-hidden rounded-b-2xl  ${
                        mobileNavOpen ? "max-h-screen py-7" : "max-h-0 py-0"
                    }`}
                >
                    <nav>
                        <ul className="flex flex-col items-center gap-6 capitalize font-semibold">
                            <Link href="#Hero">Home</Link>
                            <Link href="#AboutUs">About us</Link>
                            <Link href="#WorkingProcess">Process</Link>
                            <Link href="#Services">Services</Link>
                        </ul>
                    </nav>
                </div>
            </header>
            {mobileNavOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setMobileNavOpen(false)}
                ></div>
            )}
        </>
    );
}

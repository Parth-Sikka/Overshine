'use client'
import Image, { StaticImageData } from "next/image";
import RightArrow from "/public/ServiceCardImages/Icons/RightArrow.svg";
import Link from "next/link";
import { motion } from "framer-motion"
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
// import { ScrollParallax } from "react-just-parallax"
// import React, { useRef } from "react";

export default function ServiceCard({
    props,
}: {
    props: {
        Img: StaticImageData;
        ImgAltText: string;
        IconImg: StaticImageData;
        Heading: string;
        Description?: string;
    };
}) {
   
    return (
        <>
            <div className="flex flex-col mb-6 items-center relative w-fit group">
                
                    <Image
                        src={props.Img}
                        alt={props.ImgAltText}
                        className="group-hover:brightness-50"
                    />
                    <div className="w-[85%] absolute mt-4 md:mt-8 opacity-0 group-hover:opacity-100 duration-200 space-y-2">
                        <p className=" text-lime-400 font-semibold text-xl">
                            {props.Heading}
                        </p>
                        <p className="text-white md:mb-10">{props.Description}</p>
                    </div>
                    {/* <ScrollParallax strength={0.9}> */}
                    <div className="bg-white md:p-5 px-5 py-2 flex items-center gap-4 rounded-lg absolute -bottom-10 drop-shadow-lg w-100 duration-300">
                        <Image src={props.IconImg} alt={props.ImgAltText} className=" bg-sky-800  rounded-full p-3 w-12 h-12" />
                        <div className="overflow-hidden">
                            <h5 className="text-xl font-semibold group-hover:hidden duration-100">
                                {props.Heading}
                            </h5>
                            <div className="flex items-center gap-2">
                                <Link href="#" className="text-primaryColor group-hover:text-xl group-hover:font-semibold duration-300">
                                    Book Service
                                </Link>
                                <Image src={RightArrow} alt="Book Service" />
                            </div>
                        </div>
                    </div>
                    {/* </ScrollParallax> */}
            </div>
        </>
    );
}

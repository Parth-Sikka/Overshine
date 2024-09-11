'use client'
import ServicesImage from "/public/Services.svg";
import OfficeCleaning from "/public/officeCleaning.svg";
import WindowCleaning from "/public/windowCleaning.svg";
import CarpetCleaning from "/public/carpetCleaning.svg";
import SaveTimeMoney from "/public/saveTimeMoney.svg";
import arrow from "../../public/Arrow1.png";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { ScrollParallax } from "react-just-parallax"
import React, { useEffect, useRef } from "react";
import {motion, useAnimation, useInView} from "framer-motion"

export default function Services() {
    const parallaxRef = useRef(null)
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);
    return (
        <>
            <section
                id="Services"
                className="bg-gradientBlue3 px-10 sm:px-12 md:px-20 lg:px-32 pt-16 sm:py-16 md:py-32 flex flex-col md:flex-row items-center gap-8 md:gap-20"
            >
                <div className="w-full md:w-1/2 mb-36 relative">
                    <Image
                        src={ServicesImage}
                        alt="Our Services"
                        className="w-full relative top-40 md:top-20"
                    />
                    <div className="absolute inset-0 space-y-2 -top-16 md:-top-20">
                        <p className="text-lg">Our Services</p>
                        <h3 className="text-2xl sm:text-3xl  md:text-4xl font-bold">
                            The services we provide <br /> to{" "}
                            <span className="text-secondaryColor">
                                our customers
                            </span>
                        </h3>
                        <ScrollParallax strength={0.09}>
                            <div className="w-max space-y-2">
                                <div className="flex items-center gap-6  bg-white shadow-lg md:my-8 rounded-md p-1 md:w-64 w-52">
                                    <Image
                                        src={SaveTimeMoney}
                                        alt="Save Time And Money"
                                        className="w-10"
                                    />
                                    <p className="uppercase whitespace-nowrap md:text-sm text-xs md:w-full text-center">
                                        Save time & money
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 bg-white shadow-lg  rounded-md p-1 md:w-64 w-52">
                                    <Image
                                        src={SaveTimeMoney}
                                        alt="Save Time And Money"
                                        className="w-10"
                                    />
                                    <p className="uppercase whitespace-nowrap md:ml-0 ml-6 md:text-sm text-xs md:w-full text-center">
                                        Eco - friendly
                                    </p>
                                    
                                </div>
                                <Image 
                                className="md:ml-8 ml-52 md:w-24 w-16 md:rotate-0 rotate-180 relative md:bottom-0 bottom-32"
                                        src={arrow}
                                        alt=""
                                    />
                               
                            </div>
                        </ScrollParallax>
                        
                    </div>
                </div>
                <div ref={ref} className="w-full md:w-1/2 flex flex-col gap-6">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="flex-col justify-center items-center  gap-6 md:gap-8 flex "

                >
                    <div className="flex  sm:flex-row  gap-6 items-center bg-white hover:outline-2 hover:outline rounded-lg p-6 hover:outline-secondaryColor">
                        <Image src={OfficeCleaning} alt="Office Cleaning" className="w-16 mb-10" />
                        <div className="flex flex-col gap-1">
                            <h5 className="text-xl sm:text-2xl font-semibold">
                                Office Cleaning
                            </h5>
                            <p className="text-sm sm:text-base">
                                We provide comprehensive cleaning services tailored to your needs.
                            </p>
                            <Link
                                href="#"
                                className="text-primaryColor text-xs underline decoration-2 decoration-current underline-offset-4 w-fit"
                            >
                                Know More
                            </Link>
                        </div>
                    </div>
                    <div className="flex sm:flex-row gap-6 items-center bg-white hover:outline-2 hover:outline rounded-lg p-6 hover:outline-secondaryColor">
                        <Image src={WindowCleaning} alt="Window Cleaning" className="w-16 mb-10" />
                        <div className="flex flex-col gap-1">
                            <h5 className="text-xl sm:text-2xl font-semibold">
                                Window Cleaning
                            </h5>
                            <p className="text-sm sm:text-base">
                                We provide comprehensive cleaning services tailored to your needs.
                            </p>
                            <Link
                                href="#"
                                className="text-primaryColor text-xs underline decoration-2 decoration-current underline-offset-4 w-fit"
                            >
                                Know More
                            </Link>
                        </div>
                    </div>
                    <div className="flex sm:flex-row gap-6 items-center bg-white hover:outline-2 hover:outline rounded-lg p-6 hover:outline-secondaryColor">
                        <Image src={CarpetCleaning} alt="Carpet Cleaning" className="w-16 mb-10" />
                        <div className="flex flex-col gap-1">
                            <h5 className="text-xl sm:text-2xl font-semibold">
                                Carpet Cleaning
                            </h5>
                            <p className="text-sm sm:text-base">
                                We provide comprehensive cleaning services tailored to your needs.
                            </p>
                            <Link
                                href="#"
                                className="text-primaryColor text-xs underline decoration-2 decoration-current underline-offset-4 w-fit"
                            >
                                Know More
                            </Link>
                        </div>
                    </div>
                    <Button
                        props={{ text: "View all services", fullWidth: true, variant: "rounded-md" }}
                    />
                   </motion.div>
                </div>
            </section>
        </>
    );
}

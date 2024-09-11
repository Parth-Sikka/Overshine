'use client'
import React from "react";
import Prop1 from "/public/prop1.svg";
import Image from "next/image";
import Button from "./Button";
import HeroImage from "/public/HeroImage.svg";
import { motion } from "framer-motion"


export default function Hero() {
    return (
        <section
            id="Hero"
            className="relative blueGradient py-10 sm:py-16 md:py-20 lg:py-24 flex flex-col md:flex-row items-center bg-no-repeat md:pl-12 lg:pl-20 xl:pl-32"
        // style={{
        //     backgroundImage: `url(${StarsBG.src})`, // Apply the background image by default
        //     backgroundSize: 'cover',
        // }}
        >
            <style jsx>{`
            @media (max-width: 767px) {
                #Hero {
                    background-image: none; /* Remove background image on smaller screens */
                }
            }
        `}</style>

            <div className="flex animate-fade flex-col gap-6 md:gap-8 justify-center text-center md:text-left max-w-lg md:max-w-none">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.25 }}

                    className="flex-col gap-6 md:gap-8 flex "

                >
                    <span className="max-w-fit capitalize bg-primaryColor text-sm md:text-base text-white px-4 py-2 md:py-3 rounded-full relative mx-auto md:mx-0">
                        Professional Cleaning Service Company
                        <Image
                            src={Prop1}
                            alt="Prop"
                            className="absolute -top-8 -left-8  md:block"
                        />
                    </span>


                    <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight">
                        Your Trusted Cleaning Service Provider
                    </h1>
                    <p className="text-sm sm:text-lg md:text-base lg:text-lg w-72 md:w-full lg:w-10/12 mx-auto md:mx-0">
                        We understand that every space is unique. Our team collaborates with you to develop a customized cleaning plan that meets your specific needs, whether it's a small office or a large industrial facility.
                    </p>
                </motion.div>
                <div className="flex text-sm  sm:flex-row w-full items-center justify-center md:justify-start gap-3 sm:gap-4 mt-4">
                    <Button props={{ text: "Let’s Get Started" }} />
                    <Button
                        props={{
                            text: "Explore Services",
                            outlined: true,
                        }}
                    />
                </div>

            </div>
            <Image
                src={HeroImage}
                alt="Person"
                className="w-10/12 md:w-2/5 lg:w-1/2 mt-10 md:mt-0"
                priority
            />
        </section>
    );
}

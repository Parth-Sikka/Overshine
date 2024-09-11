'use client'
import Image, { StaticImageData } from "next/image";
import ReviewStar from "/public/reviewStar.svg";
import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {motion} from "framer-motion"
export default function FeedbackCard({
    props,
}: {
    props: {
        Img: StaticImageData;
        ImgAltText: string;
        name: string;
        designation: string;
        feedback: string;
        stars: number;
    };
}) {
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
           
            <article ref={ref} className="bg-white h-full p-6 md:p-8 rounded-lg w-full space-y-4 hover:outline hover:outline-secondaryColor hover:outline-2">
            <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="flex-col gap-6 md:gap-8 flex "

                >
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                        <Image src={props.Img} alt={props.ImgAltText} className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="text-center md:text-left">
                        <h5 className="text-lg md:text-2xl font-semibold">{props.name}</h5>
                        <p className="text-sm md:text-base text-gray-500">{props.designation}</p>
                        <div className="flex justify-center md:justify-start items-center gap-1 mt-2">
                            {new Array(props.stars).fill(1).map((_, idx) => (
                                <Image src={ReviewStar} alt="Review Star" key={idx} />
                            ))}
                        </div>
                    </div>
                </div>
                <p className="text-center md:text-left">"{props.feedback}"</p>
                </motion.div>
            </article>
           
        </>
    );
}

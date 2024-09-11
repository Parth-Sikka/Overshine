'use client'
import { useAnimation, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import {motion} from "framer-motion"

export default function BlogCard({
    props,
}: {
    props: {
        Img: StaticImageData;
        ImgAltText: string;
        tag: string;
        text: string;
        dateText: string;
        readingTimeText: string;
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

            <article ref={ref} className="bg-white rounded-xl p-4 space-y-4 drop-shadow-md">
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
                <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600">{props.dateText}</p>
                    <p className="text-sm text-gray-600">{props.readingTimeText}</p>
                </div>
                <Image src={props.Img} alt={props.ImgAltText} className="w-full rounded-lg"/>
                <button className="border-2 md:w-44 rounded-full border-primaryColor px-4 py-1">{props.tag}</button>
                <h6 className="font-semibold text-lg">{props.text}</h6>
                </motion.div>
            </article>
        </>
    );
}

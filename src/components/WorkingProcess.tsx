'use client'
import ScheduleAppointment from "../../public/G1.png";
import Inspection from "../../public/G2.png";
import ExpertCleaning from "../../public/G3.png";
import ConvenientDelivery from "../../public/G4.png";
import Arrow from "/public/Arrow.svg";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react";

export default function WorkingProcess() {
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
            <section className="bg-gradientBlue3 px-6 sm:px-12 md:px-20 lg:px-32 py-10 sm:py-16 md:py-20 flex flex-col items-center gap-8 sm:gap-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primaryColor text-center">
                    Our Working{" "}
                    <span className="text-secondaryColor">Process</span>
                </h3>
                <div ref={ref} className="flex flex-col sm:flex-row items-stretch gap-10">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.5, delay: 0.25 }}

                        className="flex  md:flex-row flex-col "

                    >
                        <div className="flex flex-col md:mb-0 mb-6 items-center gap-2 text-center w-full">
                            <Image
                                src={ScheduleAppointment}
                                alt="Schedule Appointment"
                                className="w-32 md:w-44"

                            />
                            <h5 className="text-xl sm:text-2xl whitespace-nowrap font-semibold">
                                Schedule Appointment
                            </h5>
                            <p className="text-sm sm:text-base">
                                Book online, or by phone choose your time.
                            </p>
                        </div>
                        <Image
                            src={Arrow}
                            alt="arrow"
                            className="hidden sm:block md:mb-32 w-1/6 md:w-1/12"

                        />
                        <div className="flex flex-col md:mb-0 mb-6 items-center gap-2 text-center w-full">
                            <Image src={Inspection} alt="Inspection"
                                className="w-32 md:w-44" />
                            <h5 className="text-xl sm:text-2xl whitespace-nowrap font-semibold">
                                Inspection
                            </h5>
                            <p className="text-sm sm:text-base">
                                Work space will be inspected and based on the work,
                                Estimate will be given.
                            </p>
                        </div>
                        <Image
                            src={Arrow}
                            alt="arrow"
                            className="hidden sm:block md:mb-32 w-1/6 md:w-1/12"
                        />
                        <div className="flex flex-col md:mb-0 mb-6 items-center gap-2 text-center w-full">
                            <Image src={ExpertCleaning} alt="Expert Cleaning"
                                className="w-32 md:w-44" />
                            <h5 className="text-xl sm:text-2xl whitespace-nowrap font-semibold">
                                Expert Cleaning
                            </h5>
                            <p className="text-sm sm:text-base">
                                We use top tier techniques and cleaning agents for
                                best results.
                            </p>
                        </div>
                        <Image
                            src={Arrow}
                            alt="arrow"
                            className="hidden md:mb-32 sm:block w-1/6 md:w-1/12"
                        />
                        <div className="flex flex-col md:mb-0 mb-6 items-center gap-2 text-center w-full">
                            <Image
                                src={ConvenientDelivery}
                                alt="Convenient Delivery"
                                className="w-32 md:w-44"
                            />
                            <h5 className="text-xl sm:text-2xl whitespace-nowrap font-semibold">
                                Convenient Delivery
                            </h5>
                            <p className="text-sm sm:text-base">
                                After cleaning, we deliver the final cleaned
                                environment.
                            </p>
                        </div>
                    </motion.div>
                </div>

            </section>
        </>
    );
}

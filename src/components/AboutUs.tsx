import AboutUsImage from "/public/AboutUsImage.svg";
import Image from "next/image";
// import Button from "./Button";
import { motion } from "framer-motion"

export default function AboutUs() {
    return (
        <>
            <section id="AboutUs" className="bg-gradientBlue3 md:mb-0 px-6 sm:px-12 md:px-16 lg:px-32 py-10 sm:py-16 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-8">

                <div className="w-full md:w-1/2">
                    <Image src={AboutUsImage} alt="About Us" className="w-full h-auto object-contain" />
                </div>

                <div className="flex flex-col  w-full md:w-1/2 gap-6 md:gap-8">

                    <div className="space-y-2 sm:space-y-4">
                        {/* <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 75 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.25 }}

                            className="flex-col gap-6 md:gap-8 flex "

                        > */}
                            <p className="text-accentColor text-base sm:text-lg md:text-xl underline decoration-accentColor decoration-2 decoration-solid underline-offset-4">
                                About Us
                            </p>
                            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-primaryColor relative">
                                <span className="text-secondaryColor">
                                    OVERSHINE
                                </span>{" "}
                                GENERAL SERVICE COMPANY !!
                            </h2>
                        {/* </motion.div> */}
                    </div>
                    <p className="text-base sm:text-lg md:text-md lg:text-lg leading-relaxed">
                        We believe that a clean environment is essential for success. With a strong focus on quality, we’ve become a trusted partner for businesses in many industries. Our goal is simple: to enhance your space with tailored cleaning solutions that go beyond just surface-level cleaning. <br/> <br/>
                        Whether it’s office cleaning or industrial maintenance, our skilled team uses modern equipment and eco-friendly products to deliver results that exceed expectations. We are proud of our reliability and commitment to customer satisfaction. Each space we clean gets a customized plan to ensure our services meet your specific needs.<br/> <br/> 
                        At Overshine, we don’t just clean spaces, we build strong relationships based on trust and professionalism. Our clients know they can count on us for consistent, high-quality results every time. Discover the Overshine difference, and let us help you maintain a clean, thriving environment for your business.
                    </p>


                    {/* Uncomment the buttons if needed */}
                    {/* <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <Button props={{ text: "Book Now" }} />
                        <Button props={{ text: "Know More", outlined: true }} />
                    </div> */}
                </div>

            </section >
        </>
    );
}

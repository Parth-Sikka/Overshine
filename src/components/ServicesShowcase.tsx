import WindowCleaning from "/public/ServiceCardImages/WindowCleaning.svg";
import WindowCleaningIcon from "/public/ServiceCardImages/Icons/Window.svg";
import CarpetCleaningIcon from "/public/ServiceCardImages/Icons/Carpet.svg";
import IndustrialCleaningIcon from "/public/ServiceCardImages/Icons/Industry.svg";
import OfficeCleaningIcon from "/public/ServiceCardImages/Icons/Office.svg";
import JanitorialCleaningIcon from "/public/ServiceCardImages/Icons/Janitorial.svg";
import OvernightCleaningIcon from "/public/ServiceCardImages/Icons/Overnight.svg";
import CarpetCleaning from "/public/ServiceCardImages/CarpetCleaning.svg";
import IndustrialCleaning from "/public/ServiceCardImages/IndustrialCleaning.svg";
import JanitorCleaning from "/public/ServiceCardImages/JanitorCleaning.svg";
import OvernightCleaning from "/public/ServiceCardImages/OvernightCleaning.svg";
import Office from "../../public/ServiceCardImages/OfficeCleaning.svg";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion"

export default function ServicesShowcase() {
    return (
        <>
            <section className="bg-gradientBlue4 px-6 sm:px-12 md:px-20 lg:px-32 pt-10 sm:pt-16 md:pt-20 pb-16 sm:pb-24 md:pb-32 flex flex-col items-center gap-10">
                <h3 className="text-primaryColor text-2xl sm:text-3xl md:text-3xl font-bold w-full md:w-3/4 lg:w-1/2 text-center">
                    We are here to make our customers smile with{" "}
                    <span className="text-secondaryColor">Our Services</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
                    {/* <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.25 }}

                    > */}
                        <ServiceCard
                            props={{
                                Img: WindowCleaning,
                                ImgAltText: "Window Cleaning",
                                IconImg: WindowCleaningIcon,
                                Heading: "Window Cleaning",
                                Description:
                                    "Get spotless, streak-free windows with our professional cleaning services. We handle both interior and exterior windows for commercial and industrial spaces using eco-friendly products.",
                            }}
                        />
                        <ServiceCard
                            props={{
                                Img: CarpetCleaning,
                                ImgAltText: "Carpet Cleaning",
                                IconImg: CarpetCleaningIcon,
                                Heading: "Carpet Cleaning",
                                Description:
                                    "Deep clean your carpets with our advanced steam cleaning and stain removal techniques. We eliminate dirt, allergens, and stains, extending the life of your carpets while ensuring a fresh, clean environment.",
                            }}
                        />
                        <ServiceCard
                            props={{
                                Img: IndustrialCleaning,
                                ImgAltText: "Industrial Cleaning",
                                IconImg: IndustrialCleaningIcon,
                                Heading: "Industrial Cleaning",
                                Description:
                                    "Our heavy-duty industrial cleaning services ensure spotless warehouses, factories, and plants. We tackle grease, grime, and dust with cutting-edge equipment for a safe and compliant workspace.",
                            }}
                        />
                        <ServiceCard
                            props={{
                                Img: Office,
                                ImgAltText: "Office Cleaning",
                                IconImg: OfficeCleaningIcon,
                                Heading: "Office Cleaning",
                                Description:
                                    "Keep your office clean and productive with our tailored cleaning services. We handle everything from dusting and vacuuming to sanitizing restrooms and communal areas, offering flexible schedules to fit your needs.",
                            }}
                        />
                        <ServiceCard
                            props={{
                                Img: JanitorCleaning,
                                ImgAltText: "Janitorial Cleaning",
                                IconImg: JanitorialCleaningIcon,
                                Heading: "Janitorial Cleaning",
                                Description:
                                    "Reliable, routine janitorial cleaning services for businesses and institutions. We maintain cleanliness in every area, ensuring a safe, inviting space with flexible cleaning plans.",
                            }}
                        />
                        <ServiceCard
                            props={{
                                Img: OvernightCleaning,
                                ImgAltText: "Overnight Cleaning",
                                IconImg: OvernightCleaningIcon,
                                Heading: "Overnight Cleaning",
                                Description:
                                    "Our overnight cleaning services ensure your business is spotless without disrupting operations. We work after hours to prepare your space for the next day, from offices to industrial facilities.",
                            }}
                        />
                    {/* </motion.div> */}
                </div>

            </section>
        </>
    );
}

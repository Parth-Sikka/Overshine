import Logo from "/public/logo.svg";
import Image from "next/image";
import Call from "/public/ContactUsImages/Call2.svg";
import Mail from "/public/ContactUsImages/Mail2.svg";
import Location from "/public/ContactUsImages/Location2.svg";
import Facebook from "/public/ContactUsImages/Facebook2.svg";
import Twitter from "/public/ContactUsImages/Twitter2.svg";
import Linkedin from "/public/ContactUsImages/Linkedin2.svg";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <section className="px-6 lg:px-32 pt-10 lg:pt-20 pb-10 lg:pb-20 flex flex-col items-center lg:flex-row lg:items-stretch justify-between gap-8 lg:gap-12">
                <div className="flex flex-col justify-between w-full lg:w-2/5 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 lg:gap-6">
                            <Image src={Logo} alt="Overshine Logo" className="w-24 lg:w-32" />
                            <div className="flex flex-col items-center mt-8 lg:items-start">
                                <span className="text-xl lg:text-2xl leading-none text-primaryColor uppercase font-black">
                                    Overshine
                                </span>
                                <span className="text-sm lg:text-base leading-none text-secondaryColor uppercase font-extrabold">
                                    General services
                                </span>
                            </div>
                        </div>
                        <p className="text-sm lg:text-base">
                            Cleaning Service providers offer professional cleaning solutions to assist individuals and businesses in achieving cleanliness and a healthy environment.
                        </p>
                    </div>
                    <div className="space-y-2 text-center">
                        <p className="text-lg lg:text-xl">Follow us</p>
                        <div className="flex items-center text-center justify-center gap-4">
                            <Image src={Facebook} alt="Facebook" className="w-6 lg:w-8" />
                            <Image src={Twitter} alt="Twitter" className="w-6 lg:w-8" />
                            <Image src={Linkedin} alt="Linkedin" className="w-6 lg:w-8" />
                        </div>
                    </div>
                </div>
                <div className="space-y-4 text-center ">
                    <h4 className="text-xl lg:text-2xl font-bold  text-sky-700 whitespace-nowrap">
                        Company
                    </h4>
                    <ul className="space-y-2 text-sm lg:text-base">
                        <li>
                            <Link href="#">Home</Link>
                        </li>
                        <li>
                            <Link href="#AboutUs">About</Link>
                        </li>
                        <li>
                            <Link href="#ContactUs">Contact</Link>
                        </li>
                        <li>
                            <Link href="#Services">Services</Link>
                        </li>
                        <li>
                            <Link href="#Blogs">Latest Posts</Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-4 text-center">
                    <h4 className="text-xl lg:text-2xl font-bold  text-sky-700 whitespace-nowrap">
                        Further Links
                    </h4>
                    <ul className="space-y-2 text-sm lg:text-base">
                        <li>
                            <Link href="#">Terms and Conditions</Link>
                        </li>
                        <li>
                            <Link href="#">News</Link>
                        </li>
                        <li>
                            <Link href="#">Recruitments</Link>
                        </li>
                        <li>
                            <Link href="#">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-4 text-center">
                    <h4 className="text-xl lg:text-2xl font-bold text-sky-700 whitespace-nowrap">
                        Contact Us
                    </h4>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Image src={Call} alt="Phone" className="w-6 lg:w-8" />
                            <p className="text-sm lg:text-base">123 456 789</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Image src={Mail} alt="Mail" className="w-6 lg:w-8 bg-sky-800" />
                            <p className="text-sm lg:text-base">info@overshine.com</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Image src={Location} alt="Location" className="w-6 lg:w-8" />
                            <p className="text-sm lg:text-base">Address Here</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-secondaryColor text-center py-4 text-sm lg:text-base">
                <p>
                    Copyright © 2024 Overshine General Services. All rights
                    reserved.
                </p>
            </div>
        </>
    );
}

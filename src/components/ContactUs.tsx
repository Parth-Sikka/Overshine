"use client";
import Circles from "/public/ContactUsImages/Circles.svg";
import Call from "/public/ContactUsImages/Call.svg";
import Mail from "/public/ContactUsImages/Mail.svg";
import Location from "/public/ContactUsImages/Location.svg";
import Facebook from "/public/ContactUsImages/Facebook.svg";
import Twitter from "/public/ContactUsImages/Twitter.svg";
import Linkedin from "/public/ContactUsImages/Linkedin.svg";
import Image from "next/image";
import Button from "./Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { Loader, Loader2 } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";

export default function ContactUs() {
    const MessageSchema = z.object({
        firstName: z.string().min(1),
        lastName: z.string().min(1),
        email: z.string().min(1, "Email is required").email("Invalid Email"),
        phoneNumber: z.string().min(1).max(10),
        message: z.string().min(1),
        WindowCleaning: z.boolean(),
        CarpetCleaning: z.boolean(),
        IndustrialCleaning: z.boolean(),
        OfficeCleaning: z.boolean(),
        JanitorialCleaning: z.boolean(),
        OvernightCleaning: z.boolean(),
    });
    type MessageSchemaType = z.infer<typeof MessageSchema>;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<MessageSchemaType>({ resolver: zodResolver(MessageSchema) });
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [Message, setMessage] = useState<MessageSchemaType>({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
        WindowCleaning: false,
        CarpetCleaning: false,
        IndustrialCleaning: false,
        OfficeCleaning: false,
        JanitorialCleaning: false,
        OvernightCleaning: false,
    });
    const SendMessage: SubmitHandler<MessageSchemaType> = async (data) => {
        try {
            setSubmitting(true);
            for (const [key, value] of Object.entries(data)) {
                if (value === false)
                    delete data[key as keyof MessageSchemaType];
            }
            const res = await axios.post("/api/sendEmail", data);
            if (res.status === 200)
                toast.success("We've received your message!", {
                    duration: 5000,
                    position: "bottom-center",
                });
            console.log(res);
        } catch (error: any) {
            toast.error("An error occurred.\nPlease try again later!", {
                duration: 5000,
                position: "bottom-center",
                className: "text-center",
            });
        } finally {
            setSubmitting(false);
        }
    };
    const { reset } = useForm();
    const clearForm = () => {
        reset();
    };
    return (
        <>
            <section
                className="bg-gradientBlue4 px-6 md:px-16 lg:px-32 py-12 md:py-16 lg:py-20 flex flex-col items-center gap-8"
                id="ContactUs"
            >
                <Toaster />
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primaryColor">
                        Lets <span className="text-secondaryColor">Talk</span> With Us
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg lg:text-xl">
                        Any question or remarks? Just write us a message!
                    </p>
                </div>
                <article className="flex flex-col lg:flex-row md:w-full w-96  p-2 gap-6 lg:gap-12 rounded-3xl bg-white max-w-full lg:max-w-11/12">
                    <div
                        className="bg-[#0D4C79] bg-no-repeat bg-right-bottom text-white p-6 lg:p-8 rounded-lg flex flex-col justify-between h-72 md:h-full aspect-[3/4]"
                        style={{
                            backgroundImage: `url(${Circles.src})`,
                        }}
                    >
                        <div className="space-y-2">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                                Contact Information
                            </h3>
                            <p className="text-gray-200 text-sm md:text-base">
                                Say something to start a live chat!
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 md:gap-6">
                                <Image src={Call} alt="Phone" className="w-6 md:w-8" />
                                <p className="text-sm md:text-base">305 614 0032</p>
                            </div>
                            <div className="flex items-center gap-4 md:gap-6">
                                <Image src={Mail} alt="Mail" className="w-6 md:w-8" />
                                <p className="text-sm md:text-base">sales@overshinegs.com</p>
                            </div>
                            <div className="flex items-center gap-4 md:gap-6">
                                <Image src={Location} alt="Location" className="w-6 md:w-8" />
                                <p className="text-sm md:text-base">10 canal st #188, <br/> miami springs, fl 33166</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 md:gap-6">
                            <Image src={Facebook} alt="Facebook" className="w-6 md:w-8" />
                            <Image src={Twitter} alt="Twitter" className="w-6 md:w-8" />
                            <Image src={Linkedin} alt="Linkedin" className="w-6 md:w-8" />
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit(SendMessage)}
                        className="space-y-6 lg:space-y-8 md:w-full w-full md:mt-6 md:mr-6 lg:w-3/5 py-6 lg:py-8"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <input
                                    id="FirstName"
                                    className="text-sm md:text-base peer w-full py-2 border-b-2 focus:outline-none focus:border-b-[#8D8D8D] placeholder-transparent"
                                    placeholder="First Name"
                                    autoComplete="name"
                                    {...register("firstName")}
                                />
                                <label
                                    htmlFor="FirstName"
                                    className="absolute text-sm md:text-base peer-placeholder-shown:top-2 left-0 text-gray-600 peer-placeholder-shown:text-gray-400 -top-3 duration-300 peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:bg-white bg-white px-1"
                                >
                                    First Name
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    id="LastName"
                                    className="text-sm md:text-base peer w-full py-2 border-b-2 focus:outline-none focus:border-b-[#8D8D8D] placeholder-transparent"
                                    placeholder="Last Name"
                                    autoComplete="name"
                                    {...register("lastName")}
                                />
                                <label
                                    htmlFor="LastName"
                                    className="absolute text-sm md:text-base peer-placeholder-shown:top-2 left-0 text-gray-600 peer-placeholder-shown:text-gray-400 -top-3 duration-300 peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:bg-white bg-white px-1"
                                >
                                    Last Name
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    id="Email"
                                    className="text-sm md:text-base peer w-full py-2 border-b-2 focus:outline-none focus:border-b-[#8D8D8D] placeholder-transparent"
                                    placeholder="Email"
                                    autoComplete="email"
                                    {...register("email")}
                                />
                                <label
                                    htmlFor="Email"
                                    className="absolute text-sm md:text-base peer-placeholder-shown:top-2 left-0 text-gray-600 peer-placeholder-shown:text-gray-400 -top-3 duration-300 peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:bg-white bg-white px-1"
                                >
                                    Email
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    id="PhoneNumber"
                                    type="string"
                                    className="text-sm md:text-base peer w-full py-2 border-b-2 focus:outline-none focus:border-b-[#8D8D8D] placeholder-transparent"
                                    placeholder="Phone Number"
                                    {...register("phoneNumber")}
                                />
                                <label
                                    htmlFor="PhoneNumber"
                                    className="absolute text-sm md:text-base peer-placeholder-shown:top-2 left-0 text-gray-600 peer-placeholder-shown:text-gray-400 -top-3 duration-300 peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:bg-white bg-white px-1"
                                >
                                    Phone Number
                                </label>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h6 className="text-xl font-medium">Services</h6>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="inline-flex items-center">
                                    <label className="relative flex items-center cursor-pointer pr-3" htmlFor="WindowCleaning">
                                        <input
                                            type="checkbox"
                                            className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 bg-gray-200 transition-all checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                            id="WindowCleaning"
                                            {...register("WindowCleaning")}
                                        />
                                        <span className="absolute pr-3 text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-3 w-3"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                stroke="currentColor"
                                                strokeWidth="1"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    </label>
                                    <label className="cursor-pointer text-base select-none" htmlFor="WindowCleaning">
                                        Window Cleaning
                                    </label>
                                </div>
                                <div className="inline-flex items-center">
                                    <label className="relative flex items-center cursor-pointer pr-3" htmlFor="CarpetCleaning">
                                        <input
                                            type="checkbox"
                                            className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 bg-gray-200 transition-all checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                            id="CarpetCleaning"
                                            {...register("CarpetCleaning")}
                                        />
                                        <span className="absolute pr-3 text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-3 w-3"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                stroke="currentColor"
                                                strokeWidth="1"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    </label>
                                    <label className="cursor-pointer text-base select-none" htmlFor="CarpetCleaning">
                                        Carpet Cleaning
                                    </label>
                                </div>
                                <div className="inline-flex items-center">
                                    <label className="relative flex items-center cursor-pointer pr-3" htmlFor="IndustrialCleaning">
                                        <input
                                            type="checkbox"
                                            className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 bg-gray-200 transition-all checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                            id="IndustrialCleaning"
                                            {...register("IndustrialCleaning")}
                                        />
                                        <span className="absolute pr-3 text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-3 w-3"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                stroke="currentColor"
                                                strokeWidth="1"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    </label>
                                    <label className="cursor-pointer text-base select-none" htmlFor="IndustrialCleaning">
                                        Industrial Cleaning
                                    </label>
                                </div>
                                <div className="inline-flex items-center">
                                    <label className="relative flex items-center cursor-pointer pr-3" htmlFor="OfficeCleaning">
                                        <input
                                            type="checkbox"
                                            className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 bg-gray-200 transition-all checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                            id="OfficeCleaning"
                                            {...register("OfficeCleaning")}
                                        />
                                        <span className="absolute pr-3 text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-3 w-3"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                stroke="currentColor"
                                                strokeWidth="1"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    </label>
                                    <label className="cursor-pointer text-base select-none" htmlFor="OfficeCleaning">
                                        Office Cleaning
                                    </label>
                                </div>
                                <div className="inline-flex items-center">
                                    <label className="relative flex items-center cursor-pointer pr-3" htmlFor="JanitorialCleaning">
                                        <input
                                            type="checkbox"
                                            className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 bg-gray-200 transition-all checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                            id="JanitorialCleaning"
                                            {...register("JanitorialCleaning")}
                                        />
                                        <span className="absolute pr-3 text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-3 w-3"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                stroke="currentColor"
                                                strokeWidth="1"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    </label>
                                    <label className="cursor-pointer text-base select-none" htmlFor="JanitorialCleaning">
                                        Janitorial Cleaning
                                    </label>
                                </div>
                                <div className="inline-flex items-center">
                                    <label className="relative flex items-center cursor-pointer pr-3" htmlFor="OvernightCleaning">
                                        <input
                                            type="checkbox"
                                            className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 bg-gray-200 transition-all checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                            id="OvernightCleaning"
                                            {...register("OvernightCleaning")}
                                        />
                                        <span className="absolute pr-3 text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-3 w-3"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                stroke="currentColor"
                                                strokeWidth="1"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    </label>
                                    <label className="cursor-pointer text-base select-none" htmlFor="OvernightCleaning">
                                        Overnight Cleaning
                                    </label>
                                </div>
                                <div className="relative md:mt-6">
                                    <input
                                        id="Message"
                                        className="text-sm md:text-base peer w-full py-2 md:w-44 border-b-2 focus:outline-none focus:border-b-[#8D8D8D] placeholder-transparent"
                                        placeholder="Message"
                                        autoComplete="name"
                                        {...register("message")}
                                    />
                                    <label
                                        htmlFor="Message"
                                        className="absolute text-sm md:text-base peer-placeholder-shown:top-2 left-0 text-gray-600 peer-placeholder-shown:text-gray-400 -top-3 duration-300 peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:bg-white bg-white px-1"
                                    >
                                        Message
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={submitting}
                                className="capitalize bg-primaryColor md:mt-12 text-white px-8 py-3 rounded-md w-full sm:w-auto disabled:cursor-not-allowed disabled:bg-gray-400"
                            >
                                {submitting ? (
                                    <div className="flex items-center gap-2">
                                        <Loader2 className="mr-2 w-4 animate-spin" />
                                        <span>Please wait</span>
                                    </div>
                                ) : (
                                    <span>Send Message</span>
                                )}
                            </button>
                            {/* <button
                                type="button"
                                onClick={clearForm}
                                className=" text-white bg-red-500 hover:bg-red-600 rounded-md"
                            >
                                Clear Form
                            </button> */}
                        </div>

                    </form>
                </article>
            </section>
        </>
    );
}

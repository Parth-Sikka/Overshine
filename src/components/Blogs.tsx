import React from "react";
import Button from "./Button";
import WindowCleaningImage from "/public/BlogsImages/WindowCleaning.svg";
import CarpetCleaningImage from "/public/BlogsImages/CarpetCleaning.svg";
import Blog from "../../public/Window Cleanig.jpg"
import Window from "../../public/Window Cleanig.jpg";
import BlogCard from "./BlogCard";

export default function Blogs() {
    return (
        <>
            <section id="Blogs" className="px-6 sm:px-12 lg:px-32 py-12 sm:py-16 lg:py-20 bg-gradientBlue3 space-y-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <h3 className="text-3xl sm:text-4xl font-bold capitalize text-primaryColor">
                        Read our latest blog
                    </h3>
                    <div className="md:flex hidden">
                    <Button
                        props={{
                            text: "View All Blogs",
                        }}
                        
                    />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <BlogCard
                        props={{
                            Img: Window,
                            ImgAltText: "Window Cleaning",
                            tag: "Window Cleaning",
                            text: "The Ultimate Guide to Streak-Free Window Cleaning: Tips from the Pros",
                            dateText: "Tuesday, August 11, 2024",
                            readingTimeText: "4 Min Read",
                        }}
                    />
                    <BlogCard
                        props={{
                            Img: CarpetCleaningImage,
                            ImgAltText: "Carpet Cleaning",
                            tag: "Carpet Cleaning",
                            text: "Top 5 Carpet Cleaning Secrets to Keep Your Floors Fresh and Spotless",
                            dateText: "Friday, August 09, 2024",
                            readingTimeText: "3 Min Read",
                        }}
                    />
                    <BlogCard
                        props={{
                            Img: Blog,
                            ImgAltText: "Window Cleaning",
                            tag: "Window Cleaning",
                            text: "Why Regular Office Cleaning is Crucial for a Healthy Work Environment",
                            dateText: "Monday, August 23, 2024",
                            readingTimeText: "5 Min Read",
                        }}
                    />
                </div>
            </section>
        </>
    );
}

import Image from "next/image";
import NewsLetterSectionImage from "/public/NewsLetterSectionImage.png";
import NewsLetterSectionBG from "/public/NewsLetterSectionBG.png";
import NewsLetterSectionCircles from "/public/NewsLetterSectionCircles.svg";

export default function NewsLetter() {
    return (
        <>
            <section
                className="text-white bg-primaryColor md:w-full bg-right-bottom bg-no-repeat flex flex-col lg:flex-row items-center md:py-0 py-5  gap-8 "
                style={{
                    backgroundImage: `url(${NewsLetterSectionCircles.src})`,
                }}
            >
                <div className="relative w-full lg:w-1/2 flex-shrink-0">
                    <Image
                        src={NewsLetterSectionImage}
                        alt="Cleaning Image"
                        className="relative z-20 md:w-full h-auto md:px-0 w-5/6"
                    />
                    <Image
                        src={NewsLetterSectionBG}
                        alt=""
                        className="absolute md:w-full w-5/6 inset-0 z-10"
                        style={{ left: '2%',  }}
                    />
                </div>
                <div className="space-y-4 lg:space-y-6 md:text-center md:pl-0 pl-5 lg:text-left w-full lg:w-1/2">
                    <h2 className="md:text-3xl text-2xl lg:text-5xl font-bold capitalize">
                        Join Our Newsletter
                    </h2>
                    <p className="text-base lg:text-lg text-sm w-full lg:w-3/4 mx-auto lg:mx-0">
                        Subscribe for news, promos, cleaning tips, and exclusive
                        offers in your inbox. Don’t miss updates.
                    </p>
                    <button className="bg-secondaryColor md:px-8 text-sm lg:px-10 font-medium text-black py-2 px-6 md:py-3 lg:py-4 rounded-full">
                        Join Now
                    </button>
                </div>
            </section>
        </>
    );
}

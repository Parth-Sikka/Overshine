import FeedbackCard from "./FeedbackCard";
import Person from "/public/FeedbackImages/Person.svg";
import Person2 from "../../public/Ellipse 795.png";
import Person3 from "../../public/Ellipse 795 (1).png";
import Testimonial1 from "../../public/IMG1.jpg"
import Businessman from "../../public/IMG2.png";
import Businessman2 from "../../public/IMG3.png";

export default function Feedback() {
    return (
        <>
            <section className="bg-gradientBlue3 px-6 sm:px-12 md:px-20 lg:px-32 py-12 sm:py-16 md:py-20 space-y-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-primaryColor text-3xl sm:text-4xl md:text-5xl font-bold">
                            Clients Feedback
                        </h2>
                        <h3 className="text-primaryColor text-2xl sm:text-3xl md:text-4xl font-bold">
                            About{" "}
                            <span className="text-secondaryColor">
                                Their Experience
                            </span>
                        </h3>
                    </div>
                    <p className="w-full md:w-1/2 lg:w-1/3 text-center md:text-left">
                        We provide comprehensive cleaning services tailored to
                        your needs. From professional commercial cleaning.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:flex-wrap md:flex-nowrap">

                    <FeedbackCard
                        props={{
                            Img: Businessman,
                            ImgAltText: "Name",
                            designation: "Business Man",
                            name: "David R.",
                            feedback:
                                "Their janitorial and overnight services are perfect for our small business. No disruptions, just a clean workspace. “",
                            stars: 5,
                        }}
                    />
                    <FeedbackCard
                        props={{
                            Img: Businessman2,
                            ImgAltText: "Name",
                            designation: "Business Man",
                            name: "Bessie Cooper",
                            feedback:
                                "So glad you managed to save my screen! The cigarette smell is gone and the fabric looks amazing.",
                            stars: 5,
                        }}
                    />
                    <FeedbackCard
                        props={{
                            Img: Testimonial1,
                            ImgAltText: "Name",
                            designation: "Business Women",
                            name: "Jennifer L.",
                            feedback:
                                "Overshine has become an essential part of our operations. Reliable, professional, and always on point.",
                            stars: 5,
                        }}
                    />
                </div>
            </section>
        </>
    );
}

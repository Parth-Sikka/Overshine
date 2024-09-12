import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import WorkingProcess from "@/components/WorkingProcess";
import ServicesShowcase from "@/components/ServicesShowcase";
import Feedback from "@/components/Feedback";
import ContactUs from "@/components/ContactUs";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";
import { motion } from "framer-motion"

export default function Home() {
    return (
        <>
            <main
                className="bg-no-repeat bg-right-top  "
            >
                <Nav />
                <Hero />
                <AboutUs />
                <Services />
                <WorkingProcess />
                <ServicesShowcase />
                <Feedback />
                <ContactUs />
                <NewsLetter />
                <Footer />
            </main>
        </>
    );
}

import Fireball from "@/components/Fireball";
import Glitch from "@/components/Glitch";
import Stack from "@/components/Stack";
import Image from "next/image";
import Contact from "@/components/Contact";
import exclaim from "@/public/img/exclaim.svg";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import About from "@/components/About";
// import Scrollbar from "smooth-scrollbar";
// import { useEffect } from "react";

export default function Page() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Team />
            <Contact />
            <Footer />
        </>
    )
}

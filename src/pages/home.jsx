import React, { useEffect, useRef, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer"
import "./home.css";
import TM_2_image from "../assets/Frame.png";
import poster from "../assets/Poster.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

import rg from "../assets/rb.png";
import image250 from "../assets/Group250.png";
import card from "../assets/Rectangle5836.png";
import {IoMailOutline, IoMailUnreadOutline} from 'react-icons/io5'
import ContactUs from "../components/ContactUs";
import { Link } from "react-router-dom";
import ContactPopup from "../components/contactpop";  // Import Contact Popup



gsap.registerPlugin(ScrollTrigger);

const initialCards = [
    {
        id: 1,
        title: "FraseIT",
        subtitle: "Revolutionize Healthcare with AI-Powered Clinical Automation",
        description:"Empowering healthcare providers with AI-driven tools to automate transcription, simplify data sharing, and deliver real-time clinical insights enhancing patient outcomes and operational efficiency.",
        img1: poster,
        img2: TM_2_image,
    },
    {
        id: 2,
        title: "AI Insight",
        subtitle: "Transform Data into Actionable Intelligence",
        description:
            "Harness the power of AI to analyze and interpret vast datasets, providing meaningful insights that drive decision-making and enhance business strategies.",
        img1: poster,
        img2: TM_2_image,
    },
    {
        id: 3,
        title: "AutomateIT",
        subtitle: "Streamline Workflow with Intelligent Automation",
        description:
            "Leverage AI-driven automation tools to eliminate manual tasks, reduce errors, and boost operational efficiency across industries.",
        img1: poster,
        img2: TM_2_image,
    },
];
const blogs = [
    {
        id: 1,
        title: "Revolutionizing Patient Care: The Role of AI-Powered Transcription Tools",
        date: "Feb 14, 2024",
        img: card,
        link: "#",
    },
    {
        id: 2,
        title: "Revolutionizing Patient Care: The Role of AI-Powered Transcription Tools",
        date: "Feb 10, 2024",
        img: card,
        link: "#",
    },
    {
        id: 3,
        title: "Revolutionizing Patient Care: The Role of AI-Powered Transcription Tools",
        date: "Feb 8, 2024",
        img: card,
        link: "#",
    },
    {
        id: 4,
        title: "Revolutionizing Patient Care: The Role of AI-Powered Transcription Tools",
        date: "Feb 5, 2024",
        img: card,
        link: "#",
    },
];

const Home = () => {
    const [cards, setCards] = useState(initialCards);
    const [popupOpen, setPopupOpen] = useState(false); // State for Popup
    const [xOffset, setXOffset] = useState(window.innerWidth < 500 ? -250 : 350);

    // Handle screen resizing
    useEffect(() => {
        const handleResize = () => {
            setXOffset(window.innerWidth < 500 ? -250 : -350);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleCardClick = () => {
        setCards((prevCards) => {
            return [prevCards[2], prevCards[0], prevCards[1]]; 
        });
    };
    return (
        <div className="Home">
                <Header />
            <div className="herosection">
                <div className="text">
                    <p className="text-heading" >Empowering Industries with Cutting-Edge AI Solutions</p>
                    <p className="description" >
                        Explore our suite of intelligent AI products that streamline
                        processes, drive efficiency, and deliver smarter insights across
                        various sectors.
                    </p>

                    <div className="herobutton">
                        
                        <button className="explore"><Link to="/product">Explore Products </Link></button>
                        
                        
                        <button className="get" onClick={() => setPopupOpen(true)}>
                         <IoMailUnreadOutline className='icon'  />    Get in Touch
                        </button>
                    </div>
                
                </div>
                <div className="background">
                        <img src={rg}/>
                    </div>
            </div>

            <div className="top_mid">
                <motion.div className="slider-wrapper">
                    <AnimatePresence>
                    {cards.map((card, index) => (
                            <motion.div
                                key={card.id}
                                className={`TM_1 ${index === 1 ? "center-card" : ""}`}
                                onClick={handleCardClick}
                                initial={{ opacity: 0, scale: 0.9, x: 100 }} // 🔹 Start with fade-in effect
                                animate={{
                                    x: index === 0 ? -xOffset : index === 1 ? 0 : xOffset, // Left = -xOffset, Right = +xOffset
                                    rotateY: index === 0 ? -35 : index === 2 ? 35 : 0, // 🔹 Smoother rotation
                                    scale: index === 1 ? 1.2 : 1, // 🔹 Center card enlarges
                                    opacity: 1, // 🔹 Fade in effect
                                    zIndex: index === 1 ? 10 : 5, // Keep center card on top
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.9,
                                    x: -200, // 🔹 Move out smoothly
                                    rotateY: index === 0 ? -20 : index === 2 ? 20 : 0, // 🔹 Keep rotation visible
                                }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            >
                                {/* <div className="poster">
                                    <img src={card.img1} alt="Poster" />
                                </div>
                                <div className="TM_2">
                                    <img src={card.img2} alt="Frame" />
                                </div> */}
                                <div className="content">
                                    <p className="content-title" >{card.title}</p>
                                    <p className="content-subtitle" >{card.subtitle}</p>
                                    <p className="content-description" >{card.description}</p>
                                    <button>Learn More</button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>


            </div>
            <section className="about-section">
                <div className="container">
                    {/* Left Side - Image with Overlay */}
                    <div className="about-image">
                        <div className="image-wrapper">
                            <img src={image250} alt="Professional" />
                           
                        </div>
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="about-content">
                        <p className="about-content-title" >Who we are</p>
                        <p className="about-content-heading" >
                            Passionate Technologists and Industry Experts
                        </p>
                        <p className="about-content-description" >
                            We are a dedicated team of technologists and industry veterans with a deep
                            understanding of the challenges faced by modern enterprises. Our solutions are
                            tailored to address these challenges, helping businesses stay competitive in an
                            ever-evolving market.
                        </p>
                        <p 
                        className="about-content-description"
                        >
                            At FogFly AI Technologies, we are committed to empowering businesses with the
                            transformative power of AI, advanced analytics, and next-generation tools.
                            Our solutions are designed to simplify processes, enhance decision-making,
                            and accelerate business growth. By fusing data with intelligence, we help you
                            achieve unparalleled efficiencies and unlock new opportunities for success.
                        </p>
                        <a href="/about" className="about-button">
                            ➤ More About Us
                        </a>
                    </div>
                </div>
            </section>
            <section className="blog-section">
                       <p className="blog-section-heading" >
                            A lot is happening, <br />
                            <span>We are Blogging about it!</span>
                        </p>
                <div className="container">
                    {/* Left Featured Blog */}
                    <div className="featured-blog">
                        <div className="featured-content">
                            <p className="featured-content-heading" >🚀 Introducing Our New Product: FraseIT</p>
                            <p>Knowledge by Practice with AI.</p>
                            <p>
                                We've unveiled an innovative speech-to-text AI-powered transcription tool
                                that enhances productivity and streamlines workflows for businesses.
                            </p>
                            <a href="#">Read More about FraseIT ➤</a>
                        </div>
                    </div>

                    {/* Right Blog Grid */}
                    <div className="blog-grid">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="blog-card">
                                <img src={blog.img} alt="Blog" />
                                <div className="blog-info">
                                    <p>{blog.date}</p>
                                    <p className="blog-info-heading" >{blog.title}</p>
                                    <a href={blog.link}>Read Article ➤</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Explore More Button */}
                <div className="explore-more">
                    <a href="#">➤ Explore More</a>
                </div>
            </section>
            <ContactPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
            <Footer />
        </div>
    );
};

export default Home;

import React, { useEffect, useRef, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer"
import "./home.css";
import TM_2_image from "../assets/Frame.png";
import poster from "../assets/Poster.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import rafiki from "../assets/rafiki.png";
import rg from "../assets/rb.png";
import image250 from "../assets/Group250.png";
import card from "../assets/Rectangle5836.png";

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
                    <h1>Empowering Industries with Cutting-Edge AI Solutions</h1>
                    <p>
                        Explore our suite of intelligent AI products that streamline
                        processes, drive efficiency, and deliver smarter insights across
                        various sectors.
                    </p>

                    <div className="herobutton">
                        <button className="explore">Explore Products</button>
                        <button className="get">
                            <i className="fa fa-envelope" aria-hidden="true"></i> Get in Touch
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
                                    x: index === 0 ? "-350px" : index === 1 ? "0px" : "350px", // 🔹 Reduced gap
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
                                    <h2>{card.title}</h2>
                                    <h3>{card.subtitle}</h3>
                                    <p>{card.description}</p>
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
                        <h4>Who we are</h4>
                        <h2>
                            <span>Passionate Technologists</span> and Industry Experts
                        </h2>
                        <p>
                            We are a dedicated team of technologists and industry veterans with a deep
                            understanding of the challenges faced by modern enterprises. Our solutions are
                            tailored to address these challenges, helping businesses stay competitive in an
                            ever-evolving market.
                        </p>
                        <p>
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
                <div className="container">
                    {/* Left Featured Blog */}
                    <div className="featured-blog">
                        <h2>
                            A lot is happening, <br />
                            <span>We are Blogging about it!</span>
                        </h2>
                        <div className="featured-content">
                            <h4>🔹 Introducing Our New Product: FraseIT</h4>
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
                                    <h4>{blog.title}</h4>
                                    <p>{blog.date}</p>
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
            <section className="contact-section">
                <div className="container">
                    {/* Left Side - Contact Form */}
                    <div className="contact-form">
                        <h2>Have Questions?<br /> Let's Talk!</h2>
                        <p className="email-info">
                            <span>📧</span> info@foggy.ai
                        </p>
                        <form>
                            <div className="input-row">
                                <input type="text" placeholder="Name" required />
                                <input type="email" placeholder="Email" required />
                            </div>
                            <textarea placeholder="Message" required></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </div>

                    {/* Right Side - Illustration */}
                    <div className="contact-illustration">
                        <img src={rafiki} alt="Contact Illustration" />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;

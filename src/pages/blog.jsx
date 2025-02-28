import Header from "../components/header";
import Footer from "../components/footer";
import "./blog.css";
import bloghero from "../assets/Frame.png";
import rafiki from "../assets/rafiki.png";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import mail from "../assets/mail.png";
import news from "../assets/news.png";
import vector from "../assets/Vector.png";
import bar from "../assets/bar-chart.png";

const newsItems = [
    {
        title: "AI-Powered Solutions Revolutionizing Industries",
        description:
            "Discover how Fogeye AI is transforming industries with cutting-edge artificial intelligence solutions...",
        date: "Jan 02, 2025",
    },
    {
        title: "The Future of AI in Healthcare",
        description:
            "Learn how AI is making healthcare more efficient and accessible...",
        date: "Jan 10, 2025",
    },
    {
        title: "Boosting Cybersecurity with AI",
        description:
            "Explore how AI-driven solutions are strengthening digital security...",
        date: "Feb 15, 2025",
    },
    {
        title: "AI and the Future of Work",
        description:
            "How AI is shaping the workforce and future job trends...",
        date: "March 05, 2025",
    },
];

const Blog = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="blog">
            <Header />
            <div className="blogcontainer">
                <div className="bloghero">
                    <img src={bloghero} alt="Blog Hero" />
                </div>
            </div>

            <div className="news-section">
                <div className="news-list">
                    {newsItems.map((item, index) => (
                        <div className="news-item" key={index}>
                            <div className="news-image">
                                <div className="image-placeholder"></div>
                            </div>
                            <div className="news-content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <a href="#" className="read-more">Read More →</a>
                                <span className="news-date">Published on {item.date}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div onClick={() => setIsOpen(!isOpen)} className={`news-sidebar ${isOpen ? 'active' : ''}`}>
                    <div className="sideboxes">
                       
                        <div className="sidebar-box">
                        <div className="new_logo">
                            <img src={news}/>
                        </div>
                            <div className="sidebar_text">
                            <h4>News and Updates</h4>
                            <p>Stay updated with Fogeye’s milestones, new product launches, and events.</p>
                            </div>
                        </div>
                        <div className="sidebar-box">
                        <div className="new_logo">
                        <img src={bar}/>
                        </div>
                        <div className="sidebar_text">
                            <h4>News and Updates</h4>
                            <p>Stay updated with Fogeye’s milestones, new product launches, and events.</p>
                            </div>
                        </div>
                        <div className="sidebar-box">
                        <div className="new_logo">
                        <img src={vector}/>
                        </div>
                        <div className="sidebar_text">
                            <h4>News and Updates</h4>
                            <p>Stay updated with Fogeye’s milestones, new product launches, and events.</p>
                            </div>
                        </div>
                    </div>
                    <div className="newsletter-box">
                        <div className="mail">
                        <img src={mail}/>
                        </div>
                        <h4>Get fresh content delivered</h4>
                        <p>Get strategic insights that matter to your business. Stay updated on the areas that interest you.</p>
                        <div className="newsletter-form">
                            <input type="email" name="email" placeholder="Enter your email" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            <section className="contact-section">
                <div className="container">
                    <div className="contact-form">
                        <h2>Have Questions?<br /> Let's Talk!</h2>
                        <p className="email-info">
                            <span>📧</span> info@foggy.ai
                        </p>
                        <form>
                            <div className="input-row">
                                <input type="text" name="name" placeholder="Name" required />
                                <input type="email" name="email" placeholder="Email" required />
                            </div>
                            <textarea name="message" placeholder="Message" required></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                    <div className="contact-illustration">
                        <img src={rafiki} alt="Contact Illustration" />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Blog;

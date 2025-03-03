import Header from "../components/header";
import Footer from "../components/footer";
import "./about.css";
import imgHero from "../assets/abotHero.png";
import imgHero2 from "../assets/imgHero2.png";
import dimond from "../assets/dimond.png";
import eclips from "../assets/Ellipse.png";
import rafiki from "../assets/rafiki.png";
import New_eclips from "../assets/Ellipse31.png";
import { IoMailOutline } from "react-icons/io5";
import ContactUs from "../components/ContactUs";


const cards = [
    {
        img: dimond,
        Heading: "Artificial Intelligence",
        Subheading: "We leverage AI to automate processes, improve decision-making, and deliver personalized experiences."
    },
    {
        img: dimond,
        Heading: "Artificial Intelligence",
        Subheading: "We leverage AI to automate processes, improve decision-making, and deliver personalized experiences."
    },
    {
        img: dimond,
        Heading: "Artificial Intelligence",
        Subheading: "We leverage AI to automate processes, improve decision-making, and deliver personalized experiences."
    }
]
 
const about = () => {
    return (
        <div className="about">
            <Header />
            <section className="aboutcontainer">
                <div className="about_hero">
                    <div className="hero_img">
                        <img src={imgHero} />
                    </div>
                    <div className="hero_text">
                        <h1>About Us</h1>
                        <h3>Who We Are?</h3>
                        <p>We are a team of passionate technologists and industry experts dedicated to delivering cutting-edge AI solutions. With a deep understanding of the challenges faced by modern enterprises, we provide tailored solutions that drive business growth and innovation.</p>
                    </div>
                </div>
            </section>
            <div className="aboutHeroBotom">
                <img src={imgHero2} />
            </div>
            <div className="heroCards">
                <p className="heroCards-heading" >What We Do?</p>
                <p className="heroCards-subheading" >Harnessing the Power of AI, Analytics, and Automation</p>
                <div className="aboutcards">
                    {
                        cards.map((card, index) => (
                            <div key={index} className="herocard">
                                <img src={card.img} />
                                <h1>{card.Heading}</h1>
                                <p>{card.Subheading}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <section className="why-choose-us">
                <h3 className="title">Why Choose FogEye?</h3>

                <div className="features">
                    <div className="featurescards">
                        <div className="feature">Proven Domain & Technology Expertise in Healthcare and Staffing Industry</div>
                        <div className="feature">Customer Focus</div>
                        <div className="feature">Innovation</div>
                        <div className="feature">Expanding Product Portfolio</div>
                    </div>
                </div>
                 <div className="new_eclips">
                    <img src={New_eclips}/>
                 </div>
                <div className="guiding-philosophy">
                    <div className="para">
                        <h4>Guiding Philosophy</h4>
                        <p><strong>Innovation:</strong> We believe in continuous innovation and pushing the boundaries of what is possible with technological advancements.</p>
                        <p><strong>Customer Centricity:</strong> Our focus is on understanding our clients’ unique needs and delivering solutions that exceed their expectations.</p>
                        <p><strong>Ethical:</strong> We are committed to developing and deploying AI technologies responsibly and with strict ethical standards.</p>
                        <p><strong>Collaboration:</strong> We foster strong partnerships with our clients, employees, and stakeholders to drive sustainable and supportive environments.</p>
                        <p><strong>Excellence:</strong> We strive for excellence in everything we do, from our products and services to our customer service and team culture.</p>
                    </div>
                    {/* <div className="image-container">
                        <img src={eclips} alt="Robot and human collaboration" />
                    </div> */}
                </div>
            </section>
            <ContactUs />
            <Footer />

        </div>
    )

}
export default about;
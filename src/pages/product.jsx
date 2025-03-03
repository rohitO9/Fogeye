
import Header from "../components/header";
import Footer from "../components/footer";
import "./product.css";
import producthero from "../assets/Frame.png";
import rafiki from "../assets/rafiki.png";
import product22 from "../assets/product22.png"
import ContactUs from "../components/ContactUs";



const products = [
    {
        Heading:"FraseIT",
        Subheading:"Revolutionizing Healthcare with AI-Powered Clinical Automation",
        Para:"Empowering healthcare providers with AI-driven tools to automate transcription, simplify data sharing, and deliver real-time clinical insights enhancing patient outcomes and operational efficiency.",
        tag:"# Healthcare Industry",
        img:product22,
        button:"learn more"

    },
    {
        Heading:"FraseIT",
        Subheading:"Revolutionizing Healthcare with AI-Powered Clinical Automation",
        Para:"Empowering healthcare providers with AI-driven tools to automate transcription, simplify data sharing, and deliver real-time clinical insights enhancing patient outcomes and operational efficiency.",
        tag:"# Healthcare Industry",
        img:product22,
        button:"learn more"

    }
]
const product = ()=>{ 
    return(
        <div className="product">
            <Header/>
            <div className="productcontainer">
                <div className="producthero">
                    <h1>Innovative AI Solutions for Modern Challenges</h1>
                </div>
            </div>
            <div className="productcards">
                    {
                        products.map((product ,index)=>(
                            <div key={index} className="allproduct">
                                {/* <div style={{width:"100%"}} className="productbutton">
                               <button href="#" className="read-more">Read More →</button>
                               </div> */}
                                <div className="content">
                                <h1>{product.Heading}</h1>
                                <h3>
                                    {product.Subheading}
                                </h3>
                                <p>
                                    {product.Para}
                                </p>
                                <button href="#" className="read-more">Learn More</button>
                                </div>
                                <div className="productimg">
                                    <img src={product.img}/>
                                </div>
                                <div className="tag">
                                    <p>{product.tag}</p>
                                </div>
                               
                            </div>
                        ))
                    }
                </div>
                {/* <section className="contact-section">
                <div className="container">
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

                    <div className="contact-illustration">
                        <img src={rafiki} alt="Contact Illustration" />
                    </div>
                </div>
            </section> */}
            <ContactUs />
            <Footer />
        </div>
    )
}
export default product;
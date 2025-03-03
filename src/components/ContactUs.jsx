import React from 'react'
import rafiki from "../assets/rafiki.png";
import './ContactUs.css'
import { IoMailOutline } from 'react-icons/io5';

const ContactUs = () => {
  return (
    <section className="contact-section">
                <div className="container">
                    {/* Left Side - Contact Form */}
                    <div className="contact-form">
                        <p className="contact-form-heading" >Have Questions?<br /> Let's Talk!</p>
                        <p className="email-info">
                            <IoMailOutline /> info@foggy.ai
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
  )
}

export default ContactUs
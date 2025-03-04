import React from "react";
import { FaTimes } from "react-icons/fa"; // Import Close Icon
import "./contactpop.css"; // Using SCSS for Nested CSS
import {  FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const ContactPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-box">
                {/* Close Button */}

                <button className="close-btn" onClick={onClose}>
                    <FaTimes />
                </button>
                <div className="head">
                    <h2>Get In Touch</h2>
                    <div className="social-icons">
                         <FaLinkedinIn className="icon" /> 
                         <FaInstagram className="icon" /> 
                         <FaFacebookF className="icon" /> 
                    </div>
                </div>


                <form>
                    <div className="input-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" />
                    </div>

                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" placeholder="abc@gmail.com" />
                    </div>

                    <div className="input-group">
                        <label>Message</label>
                        <textarea placeholder="Your Message"></textarea>
                    </div>

                    <button type="submit" className="send-btn">Send</button>
                </form>

                {/* Social Icons */}

            </div>
        </div>
    );
};

export default ContactPopup;

import { useState } from "react";
import "./header.css";
import Logo from "../assets/fogeye.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ContactPopup from "./contactpop";  // Import Contact Popup

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false); // State for Popup

    return (
        <div className="header">
            <nav className="navbar">
                <div className="companylogo">
                    <Link to="/"><img src={Logo} alt="Logo" /></Link>
                </div>

                {/* Hamburger Icon */}
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Responsive Menu */}
                <div className={`menu ${menuOpen ? "active" : ""}`}>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/product">Products</Link></li>
                        <li><Link to="/blog">Blogs</Link></li>
                        <li
                             onClick={() => setPopupOpen(true)}>
                            Contact Us

                        </li>
                    </ul>
                </div>
            </nav>

            {/* Contact Popup */}
            <ContactPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    );
};

export default Header;

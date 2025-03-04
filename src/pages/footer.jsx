import { useState } from "react";
import "./footer.css";
// import 'font-awesome/css/font-awesome.min.css';
import Logo from "../assets/logo.png";
import india from "../assets/contents.png";
import usa from "../assets/flag.png";
import { Link } from "react-router-dom";
import {  FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";



const footer = ()=>{
    return(
        <div className="footer">
            <div className="footercontainer">
                <div className="footerlogo">
                    <img src={Logo}/>
                    <div className="flag">
                    <li><img className="india" src={india}/></li>
                    <li><img className="usa" src={usa}/></li>
                </div>
                </div>
                <div className="menu"> 
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
            </div>
            <div className="line">
                
            </div>
            <div className="bottom">
                <div className="copy">
                    <p>© Copyright 2024 - Fogeye AI</p>
                </div>
                <div className="item">
                    <ul>
                        <li> <FaLinkedinIn  className="icon" /> </li>
                        <li> <FaInstagram className="icon" /> </li>
                        <li> <FaFacebookF  className="icon" /> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default footer
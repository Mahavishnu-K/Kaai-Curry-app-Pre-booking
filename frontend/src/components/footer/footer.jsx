import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMyLocation } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { IoPricetagsOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { HashLink as NavLink } from 'react-router-hash-link';
import footerpic from '../../assets/footerpic.png';
import './footer.css';

function Footer() {
    return(
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li><NavLink smooth to="/#home"> <IoHomeOutline size={22}/> Home</NavLink></li>
                        <li><NavLink smooth to="/#about"> <BsInfoCircle size={22} /> About</NavLink></li>
                        <li><NavLink smooth to="/#membership"> <IoPricetagsOutline size={22} />Plans</NavLink></li>
                    </ul>
                    </div>

                    <div className="footer-section">
                    <h4>FOLLOW US</h4>
                    <ul>
                        <li><a href="#" className="social-media"><FaInstagram size={23} /> Instagram</a></li>
                        <li><a href="#" className="social-media"><AiOutlineYoutube size={24} /> Youtube</a></li>
                        <li><a href="#" className="social-media"><TiSocialFacebookCircular size={26} style={{marginLeft:'-1.5px'}} /> Facebook</a></li>
                        <li><a href="#" className="social-media"><AiOutlineLinkedin size={23} /> Linked In</a></li>
                    </ul>
                    </div>

                    <div className="footer-section">
                    <h4>LET’S CONNECT</h4>
                    <p><FaRegEnvelope size={22} style={{marginRight:"5px"}}/> kaaicurry@gmail.com</p>
                    <p><MdOutlineMyLocation size={22} style={{marginRight:"5px"}}/> Chennai, Tamilnadu</p>
                    <p><IoCallOutline size={24} style={{marginRight:"2px"}}/> +91 1234859740</p>
                    </div>

                    <div className="footer-image">
                    <img src={footerpic} className="footerpic" alt="Salad Bowl" />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
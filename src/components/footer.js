import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


export default function Footer() {
    return (
        <footer>
            <div>
                <p>Website design and development by Lydia Gregory. Illustrations by Chris Porter.</p>
            </div>
            <div className="footer-links-container">
                <a href='https://www.facebook.com/kristinvanogtroprealsimple' 
                className="footer-link" 
                target="_blank" 
                rel="noreferrer">
                    <span role="img" aria-label="link to Facebook">
                        <FaFacebook/>
                    </span>
                </a>
                <a href='https://www.instagram.com/kvanogtrop/' 
                className="footer-link" 
                target="_blank" 
                rel="noreferrer">
                    <span role="img" aria-label="link to Instagram">
                        <FaInstagram/>
                    </span>
                </a>
                <a href='https://twitter.com/kvanogtrop' 
                className="footer-link" 
                target="_blank" 
                rel="noreferrer">
                    <span role="img" aria-label="link to Twitter">
                        <FaTwitter/>
                    </span>
                </a>
            </div>
        </footer>
    )
}
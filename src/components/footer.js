import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


export default function Footer() {
    return (
        <footer>
            <div>
                <p>Website design and development by Lydia Gregory. Illustrations by Chris Porter.</p>
            </div>
            <div className="footer-links-container">
                <a href='https://github.com/ljg2gb' className="footer-link">
                    <span role="img" aria-label="link to Facebook">
                        <FaFacebook/>
                    </span>
                </a>
                <a href='https://github.com/ljg2gb' className="footer-link">
                    <span role="img" aria-label="link to Instagram">
                        <FaInstagram/>
                    </span>
                </a>
                <a href='https://github.com/ljg2gb' className="footer-link">
                    <span role="img" aria-label="link to Twitter">
                        <FaTwitter/>
                    </span>
                </a>
            </div>
        </footer>
    )
}
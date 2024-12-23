import React from 'react';
import '../styles/Footer.css';  // Import CSS for styling the footer

const Footer = () => {
    return (

        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms-of-service">Terms of Service</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Portfolio</h3>
                    <ul>
                        <li><a href="/about-fitness">About Fitness</a></li>
                        <li><a href="/about-specialist">About Specialist</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href="https://www.youtube.com/channel/UC2Z4hZ2w6OXY__vUC18IY9Q">Youtube</a></li>
                        <li><a href="https://cswdesmondcsw.wixsite.com/innovation-product">Blog</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 FelizCity All Rights Reserved</p>
            </div>
        </footer>

    );
}

export default Footer;

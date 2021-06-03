import React from 'react';
import { Facebook, Twitter, YouTube, Instagram, Phone, Email, PinDrop } from '@material-ui/icons';
import './index.css'

const Index = () => {
    return (
        <div className="footer">
            <footer>
                <div className="about">
                    <h3>About Us</h3>
                    <p>Finance world is a website whose primary goal is to provide you with information about your favourite financial assets.</p>
                </div>
                <div className="main">
                    <div className="contacts">
                        <h3>Contact Us</h3>

                        <div className="contact-type">
                            <Email style={{ 'color': '#ffffff', 'margin': 15, fontSize: 25 }} />
                            <p>support@finworld.com</p>
                        </div>

                        <div className="contact-type">
                            <Phone style={{ 'color': '#ffffff', 'margin': 15, fontSize: 25 }} />
                            <p>+254712345678</p>
                        </div>

                        <div className="contact-type">
                            <PinDrop style={{ 'color': '#ffffff', 'margin': 15, fontSize: 25 }} />
                            <p>Finance Plaza, Nairobi, Kenya</p>
                        </div>
                        
                    </div>
                    <div className="socials">
                        <h3>Follow Us</h3>
                        <div className="follow">
                            <Facebook style={{ 'color': '#ffffff', 'margin': 15, fontSize: 25 }} />
                            <Twitter style={{ 'color': '#ffffff', 'margin': 15, fontSize: 25 }} />
                            <YouTube style={{ 'color': '#ffffff', 'margin': 15, fontSize: 25 }} />
                            <Instagram style={{ 'color': '#ffffff', 'margin': 15, fontSize: 25 }} />
                        </div>
                    </div>
                </div>
            </footer>

            <div className="copyright">
                <h4>
                    &copy; 2021
                </h4>

            </div>
        </div>
    )
}

export default Index;

import React from 'react';

import twitterLogo from '../../images/twitter.png'
import telegramLogo from '../../images/telegram.png'

const Footer = () => {
    return (
        <footer className = "footer-container">
            <div className = "footer-rrss-container">
                <h5 className = "footer-h5-rrss">Síguenos en las RRSS!</h5>
                <a href = "https://www.twitter.com/turftipster" target="_blank" rel="noopener noreferrer"><img className = "footer-image-twitter" src = {twitterLogo} alt = "logo-twitter"/></a>
                <a href = "https://www.telegram.me/turftipster" target="_blank" rel="noopener noreferrer"><img className = "footer-image-telegram" src = {telegramLogo} alt = "logo-telegram"/></a>
            </div>
            <div className = "footer-last-line">
                <p className = "footer-last-line-p">Turftipster © 2020 | info@turftipster.com</p>
            </div>
        </footer>
    );
}
 
export default Footer;
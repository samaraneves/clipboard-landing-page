import React from 'react';
import Image from '../../components/Image';
import Links from '../../components/Links';
import { Logo } from '../../assets/index';
import { iconFacebook } from '../../assets/index';
import { iconTwitter } from '../../assets/index';
import { iconInstagram } from '../../assets/index';

import './style.css';

const categories = [
    'FAQs',
    'Contact Us',
    'Privacy Policy',
    'Press Kit',
    'Install Guide'
]
const socialMedias = [
    {social: 'Facebook', icon: iconFacebook},
    {social: 'Twitter', icon: iconTwitter},
    {social: 'Instagram', icon: iconInstagram}
]
const Footer = () => {
    return (
        <footer className="clipboard__footer">
            <Image src={Logo} alt="Clipboard Logo"/>
            <div className="footer__container">
                <ul className="footer__links">
                    {categories.map((item, index) => (
                        <li className="footer__links-item" key={index}>
                            <Links href={'#'} item={item}/>
                        </li>
                    ))}
                </ul>
            </div>
            <address className="footer__address">
                <ul className="address__socialMedia">
                {socialMedias.map(socialMedias => (
                        <li className="address__socialMedia-item" key={socialMedias.social}>
                            <Links href={'#'}>
                                <Image src={socialMedias.icon} alt={socialMedias.social}/>
                            </Links>
                        </li>
                    ))}
                </ul>
            </address>
        </footer>
    )
}

export default Footer;
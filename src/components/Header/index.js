import React from 'react';
import Image from '../../components/Image';
import { Logo } from '../../assets';
import './style.css';

function Header(){
    return(
        <header className="clipboard__header-background">
                <Image src={Logo} alt="Clipboard Logo"/>
        </header>
    )
}

export default Header;
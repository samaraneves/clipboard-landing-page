import React from 'react';
import { Logo } from '../../assets';
import './style.css';

function Header(){
    return(
        <header className="clipboard__header-background">
                <img src={Logo} alt="Clipboard Logo" className="clipboard__header-logo"/>
        </header>
    )
}

export default Header;
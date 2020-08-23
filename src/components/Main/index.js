import React from 'react';
import './style.css';

const Main = props => {
    return (
        <main className="clipboard__main-container">
            {props.children}
        </main>
    )
}

export default Main;
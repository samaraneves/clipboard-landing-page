import React from 'react';

const Main = (props) => {
    return (
        <main className="clipboard__main-container">
            {props.children}
        </main>
    )
}

export default Main;
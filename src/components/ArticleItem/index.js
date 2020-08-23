import React from 'react';
import './style.css';

const ArticleItem = props => {
    return (
        <article className="clipboard__article">
            <img src={props.image} alt={props.alt}/>
            <h3 className="clipboard__article-title">{props.title}</h3>
            <p className="clipboard__article-text">{props.text}</p>
        </article>
    )
}

export default ArticleItem;
import React from 'react';
// import { Link } from 'react-router-dom'

const ArticleListItem = props => {
    return(
        // <Link to={`/articlelist/` + props.article.slug}>
        <article>
            <h1>{props.article.title}</h1>
            <time dateTime={props.article.timeStamp}>{props.article.displayDate} </time>
            <p>{props.article.shortText}</p>
        </article>
        // </Link>
    )
}

export default ArticleListItem;
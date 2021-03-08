import React from 'react';
import ArticleListItem from '../ArticleListItem/ArticleListItem.jsx'

const ArticleList = props => {
    return (
        <ul>
            {props.articles.map(article => (
                <li key={article.slug}>
                    <ArticleListItem article={article} />
                </li>
            ))}
        </ul>
    )
}

export default ArticleList
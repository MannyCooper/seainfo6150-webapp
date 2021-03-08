import React from "react";
import HTMLText from "../HTMLText/HTMLText";
import { Link } from "react-router-dom";

const DynamicArticle = (props) => {
  return (
    <article>
      <Link to="/articlelist">back</Link>
      {/* add extra html with javascript attributes here */}
      <header>
      <h1>{props.article.title}</h1>
      <address>
        by {props.article.author} (
          <a href={"mailto:"+props.article.authorEmail}>{props.article.authorEmail}</a>)
        <br/>
      </address>
      <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
      </header>
      <HTMLText text={props.article.text} />
    </article>
  );
};

export default DynamicArticle;

import React from "react";
import "./articlesBlock.css";
import { articlesArr } from "./articles";

export function ArticlesBlock() {
    return (
        <div className="articles-block">
            <div className="articles-block__items">
                {articlesArr.map((el, i)=>{
                    return (
                        <div className="article-item" key={i}>
                            <div className="article-item__title">{el.title}</div>
                            <div className="article-item__text">{el.text}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

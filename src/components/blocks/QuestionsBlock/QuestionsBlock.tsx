import React from "react";
import "./questionsBlock.css";
import { questionsArr } from "./questionsBlockContent";
import { QuestionItem } from "./QuestionItem/QuestionItem";

export function QuestionsBlock() {
    return (
        <div id="questions-block" className="questions-block">
            <h2 className="questions-block__title">Вопросы и ответы</h2>
            <div className="questions-block__items">
                {questionsArr.map((el, i)=>{
                    return (
                        <QuestionItem data={el} key={i}/>
                    )
                })}
            </div>
        </div>
    )
}

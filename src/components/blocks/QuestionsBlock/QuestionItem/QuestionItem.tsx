import React, { useState } from "react";
import "./questionItem.css";
import { IQuestions } from "../../../../models/IBlocks";

interface IQuestionItem {
    data: IQuestions
}

export function QuestionItem({data}: IQuestionItem) {
    const [answerVisible, setAnswerVisible] = useState(false)

    return (
        <div className="question-item">
            <div className="question-item__wrapper" onClick={()=>setAnswerVisible(!answerVisible)}>
                <div className="question-item__text">{data.title}</div>
                <button className="question-item__btn">{!answerVisible?'+':'x'}</button>
            </div>
            {answerVisible && 
                <div className="question-item__answer">
                    {data.answer}
                </div>
            }
        </div>
    )
}

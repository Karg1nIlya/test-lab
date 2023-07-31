import React from "react";
import "./changeProfessionBlock.css";
import { Header } from "../../Header/Header";

export function ChangeProfessionBlock() {
    return (
        <div className="change-profession-block">
            <div className="container">
                <Header/>
                <div className="change-profession-block__title">Говорят, никогда не поздно сменить профессию</div>
                <div className="change-profession-block__subtitle">Сделай круто тестовое задание и у тебя получится</div>
                <div className="change-profession-block__easy-btn">Проще простого!</div>
            </div>
            
        </div>
    )
}

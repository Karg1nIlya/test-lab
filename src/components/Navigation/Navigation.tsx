import React from "react"
import "./navigation.css"

export function Navigation() {
    return (
        <nav className="navigation">
            <a href="#how-work" className="navigation__item">Как это работает</a>
            <a href="#third-block" className="navigation__item">3-й блок</a>
            <a href="#questions-block" className="navigation__item">Вопросы и ответы</a>
            <a href="#form" className="navigation__item">Форма</a>
        </nav>
    )
}

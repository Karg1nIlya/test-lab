import React from "react"
import "./hamburgerMenu.css"
import { chevron } from "../../../data/dataImg"

export function HamburgerMenu() {

    const onClickItem = ()=> {
        (document.querySelector('#menu__toggle')as HTMLInputElement).checked = false
    }

    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>
            <div className="hamburger-menu-box">
                 <div className="hamburger-menu-box__header">
                    <div className="hamburger-box-header__logo-wrapper">
                        <span className="hamburger-box-header__logo"></span>
                        <div className="hamburger-box-header__logo-text">testLab</div>
                    </div>
                 </div>
                 <div className="hamburger-menu-box__list">
                    <div className="hamburger-menu-item" onClick={onClickItem}>
                        <a href="#how-work" className="hamburger-menu-item__title">Как это работает</a>
                        <img className="hamburger-menu-item__chevron" src={chevron} alt="chevron" />
                    </div>
                    <div className="hamburger-menu-item" onClick={onClickItem}>
                        <a href="#third-block" className="hamburger-menu-item__title">3-й блок</a>
                        <img className="hamburger-menu-item__chevron" src={chevron} alt="chevron" />
                    </div>
                    <div className="hamburger-menu-item" onClick={onClickItem}>
                        <a href="#questions-block" className="hamburger-menu-item__title">Вопросы и ответы</a>
                        <img className="hamburger-menu-item__chevron" src={chevron} alt="chevron" />
                    </div>
                    <div className="hamburger-menu-item" onClick={onClickItem}>
                        <a href="#form" className="hamburger-menu-item__title">Форма</a>
                        <img className="hamburger-menu-item__chevron" src={chevron} alt="chevron" />                 
                    </div>
                 </div>
             </div>
        </div>
    )
}

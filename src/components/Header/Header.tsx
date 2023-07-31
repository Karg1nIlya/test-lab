import React from "react";
import "./header.css";
import { Navigation } from "../Navigation/Navigation";
import { HamburgerMenu } from "../Navigation/HamburgerMenu/HamburgerMenu";

export function Header() {
    return (
        <header className="header">
            <div className="header__content">
                <div className="header__logo-wrapper">
                    <span className="header__logo"></span>
                    <div className="header__logo-text">testLab</div>
                </div>
                <Navigation/>
                <HamburgerMenu/>
            </div>
        </header>
    )
}

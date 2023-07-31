import React from "react";
import "./congratulation.css";
import { phone, truck } from "../../../../data/dataImg";

export function Congratulation() {
    return (
        <div id="third-block" className="congratulation">
            <div className="congratulation__words">
                <h3 className="congratulation__title">Круто, ты дошел до третьего блока</h3>
                <div className="congratulation__text">
                    <p>
                        63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.
                    </p>
                    <p>
                        Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.
                    </p>
                </div>
            </div>
            <div className="congratulation__img">
                <img className="congratulation__phone-img" src={phone} alt="phone" />
                <img className="congratulation__truck-img" src={truck} alt="truck" />
            </div>
            
        </div>
    )
}

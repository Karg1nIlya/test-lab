import React from "react";
import "./howWorkingBlock.css"
import { howWorkingItems } from "./howWorkingItemsContent";
import { HowWorkingBlockItem } from "./HowWorkingBlockItem/HowWorkingBlockItem";
import { Congratulation } from "./Congratulation/Congratulation";

export function HowWorkingBlock() {
    return (
        <div id="how-work" className="how-working-block">
            <div className="how-working-block__title">Как это работает</div>
            <div className="how-working-block__items">
                {howWorkingItems.map((el,i)=>{
                    return (
                        <HowWorkingBlockItem data={el} key={i}/>
                    )
                })}
            </div>
            <Congratulation/>
        </div>
    )
}

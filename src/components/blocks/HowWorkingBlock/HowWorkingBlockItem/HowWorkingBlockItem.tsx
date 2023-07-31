import React from "react";
import "./howWorkingBlockItem.css"
import { IHowWorkingBlock } from "../../../../models/IBlocks";

interface IHowWorkingBlockItem {
    data: IHowWorkingBlock
}

export function HowWorkingBlockItem({data}: IHowWorkingBlockItem) {
    return (
        <div className="how-working-block-item">
            <div className="how-working-block-item__img">
                <img src={data.img} alt="img" />
            </div>
            <div className="how-working-block-item__title">{data.title}</div>
            <div className="how-working-block-item__desc">
                {data.desc}
            </div>
        </div>
    )
}

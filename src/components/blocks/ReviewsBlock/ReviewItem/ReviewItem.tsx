import React from "react";
import "./reviewItem.css";
import { IReview } from "../../../../models/IBlocks";

interface IReviewItem {
    data: IReview
}

export function ReviewItem({data}: IReviewItem) {
    return (
        <div className="review-item">
            <div className="review-item__header">
                <img className="review-item__avatar" src={data.avatar}/>
                <div className="review-item__header-container">
                    <div className="review-item__name">{data.name}</div>
                    <div className="review-item__city">{data.city}</div>
                </div>
            </div>
            <div className="review-item__review">
                {data.review}
            </div>
        </div>
    )
}

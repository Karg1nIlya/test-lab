import React, { useEffect, useState } from "react";
import "./reviewsBlock.css"
import { reviewsArr } from "./reviewContent";
import { ReviewItem } from "./ReviewItem/ReviewItem";

export function ReviewsBlock() {
    const [width, setWidth] = useState(0)
    const [widthSlider, setWidthSlider] = useState(0)
    const [numberActive, setNumberActive] = useState(1)
    const [countArr, setCountArr] = useState([0])

    useEffect(()=>{
        const widthSlider = (document.querySelector('.reviews-block__reviews')as HTMLElement).offsetWidth
        const widthLine = (document.querySelector('.reviews-block__slider-line')as HTMLElement).offsetWidth
        let arr: number[] = []
        for(let i=0; i<Math.trunc(widthSlider/widthLine); i++) {
            arr.push(0)
        }
        setCountArr(arr)

        window.addEventListener("resize", resizeSlider);
        resizeSlider();
        return () => {
            window.removeEventListener("resize", resizeSlider);
        };
    },[])

    const resizeSlider = ()=> {
        setWidthSlider((document.querySelector('.reviews-block__reviews')as HTMLElement).offsetWidth)
    }

    useEffect(()=>{
        const widthSlider = (document.querySelector('.reviews-block__reviews')as HTMLElement).offsetWidth
        const widthLine = (document.querySelector('.reviews-block__slider-line')as HTMLElement).offsetWidth
        let arr: number[] = []
        for(let i=0; i<Math.trunc(widthSlider/widthLine); i++) {
            arr.push(0)
        }
        setCountArr(arr)
    },[widthSlider])

    const nextSlider = () => {
        if(numberActive+1<=countArr.length) {
            const widthTmp = (document.querySelector('.reviews-block__slider-line')as HTMLElement).offsetWidth
            setWidth(width+widthTmp)
            setNumberActive(numberActive+1)
        }     
    }

    const prevSlider = () => {
        const widthTmp = (document.querySelector('.reviews-block__slider-line')as HTMLElement).offsetWidth
        if(numberActive-1!==0) {
            setWidth(width-widthTmp)
            setNumberActive(numberActive-1)
        }
    }

    return (
        <div className="reviews-block">
            <div className="reviews-block__wrapper">
                <div className="reviews-block__title">Отзывы</div>
                <div className="reviews-block__slider">
                    <span className="reviews-block__slider-early" onClick={prevSlider}></span>
                    <div className="reviews-block__slider-line">
                        <div className="reviews-block__reviews" style={{
                            transform: `translateX(-${width}px)`
                        }}>
                            {reviewsArr.map((el, i)=> {
                                return (
                                    <ReviewItem data={el} key={i}/>
                                )
                            })}
                        </div>
                    </div>
                    <span className="reviews-block__slider-next" onClick={nextSlider}></span>
                </div>
                <div className="reviews-block__line">
                    <div className="reviews-block__pointers">
                        <div className="reviews-block__pointers-line">
                            {countArr.map((el, i)=>{
                                return (
                                    <div className={`reviews-block__line-item${i+1===numberActive?'--active':''}`} key={i}></div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from "react"
import "./daw.css"

interface IDaw {
    dawActive: boolean,
    onChangeDaw: ()=>void
}

export function Daw({dawActive, onChangeDaw}: IDaw) {
    return (
        <span className="daw">
            <label className="daw__item-label-btn">
                <input type="checkbox" checked={dawActive} onChange={()=>{
                    onChangeDaw()
                }}/>
                <span></span>
            </label>
        </span>
    )
}

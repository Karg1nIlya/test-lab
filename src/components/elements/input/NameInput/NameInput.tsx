import React, { useState } from "react";
import "./nameInput.css";
import { cancel, dawGreen } from "../../../../data/dataImg";

interface INameInput {
    value: string;
    setValue: (str: string)=>void;
    minLenght: number;
    maxLength: number;
    setTextAlert: (str: string)=>void;
    alertSignal: boolean
}

export function NameInput({value, setValue, minLenght, maxLength, setTextAlert, alertSignal}:INameInput) {
    const [goodInput, setGoodInput] = useState(false)
    const [alert, setAlert] = useState('')
    const [placeholderVisible, setPlaceholderVisible] = useState(false)

    const changeInput = (event: React.FormEvent<HTMLInputElement>)=> {
        const length = event.currentTarget.value.length
        setValue(event.currentTarget.value)
        let goodInputTmp = true
        let alertTmp = ''
        if(length>maxLength || length<minLenght) {
            if(length>maxLength) {
                alertTmp = `кол-во символов превышено на ${length - maxLength}`
                goodInputTmp = false
            }
            
        } 
        if(length!==0 && length<minLenght) {
            console.log(length)
            alertTmp = `еще символов для ввода ${minLenght - length}`
            goodInputTmp = false
        }
        if(length===0) {
            setPlaceholderVisible(false)
            goodInputTmp = false
        }
        else {
            setPlaceholderVisible(true)
        }
        setAlert(alertTmp)
        setTextAlert(alertTmp)
        setGoodInput(goodInputTmp)
    }

    return (
        <div className="name-input__container">
            <div className={`name-input${alertSignal?'--active':''}`}>
                <div className="name-input__wrapper">
                    {placeholderVisible && <div className="name-input__placeholder">Имя</div>}
                    <input id="name-input" type="text" placeholder="Имя" value={value} onChange={changeInput}/>
                </div>
                {goodInput && 
                    <img className="name-input__img" src={dawGreen} alt="dawGreen" />
                }
                {!goodInput && alertSignal && 
                    <img className="name-input__img" src={cancel} alt="cancel" />
                }
            </div>
            {alert !== '' && 
                <div className={`name-input-alert${alertSignal?'--active':''}`}>{alert}</div>
            }
        </div>
    )
}

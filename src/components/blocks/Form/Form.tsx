import React, { useState } from "react";
import "./form.css"
import { NameInput } from "../../elements/input/NameInput/NameInput";
import { PhoneInput } from "../../elements/input/PhoneInput/PhoneInput";
import { Daw } from "../../elements/Daw/Daw";

export function Form() {
    const [dawActive, setDawActive] = useState(false)
    const [valuePhone, setValuePhone] = useState('')
    const [valueName, setValueName] = useState('')
    const [alertName, setAlertName] = useState('')
    const [alertSignalName, setAlertSignalName] = useState(false)
    const [alertSignalPhone, setAlertSignalPhone] = useState(false)

    const sendBtn = ()=> {
        setAlertSignalPhone(false)
        setAlertSignalName(false)
        if(alertName!=='' || valueName==='') {
            setAlertSignalName(true)
        }
        if(valuePhone.length!==11) {
            setAlertSignalPhone(true)
        }
    }

    return (
        <form id="form" onSubmit={(e)=>{e.preventDefault()}} className="form">
            <div className="form-wrapper">
                <h2 className="form__title">Отправь форму</h2>
                <div className="form__content">
                    <div className="form__input">
                        <div className="form-input__name">
                            <NameInput value={valueName} setValue={setValueName} setTextAlert={setAlertName} minLenght={3} maxLength={30} alertSignal={alertSignalName}/>
                        </div>
                        <div className="form-input__phone">
                            <PhoneInput setValue={setValuePhone} alertSignal={alertSignalPhone}/>
                        </div>
                    </div>
                    <div className="form__buttons">
                        <div className="form__daw">
                            <Daw dawActive={dawActive} onChangeDaw={()=>setDawActive(!dawActive)}/>
                            <div className="form_daw-text">Я соглашаюсь</div>
                        </div>
                        <button className="form__send-btn" onClick={sendBtn}>Отпрвить</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

import React, { useState } from "react";
import "./phoneInput.css";
import { cancel, dawGreen } from "../../../../data/dataImg";

interface IPhoneInput {
    setValue: (str: string)=>void;
    alertSignal: boolean
}

export function PhoneInput({setValue, alertSignal}:IPhoneInput) {
    const [goodInput, setGoodInput] = useState(false)
    const [placeholderVisible, setPlaceholderVisible] = useState(false)

    const eventCalllback = (e: React.FormEvent<HTMLInputElement>) => {
        let el = e.currentTarget,
            clearVal = el.dataset.phoneClear,
            pattern = el.dataset.phonePattern,
            matrix_def = "+7(___) ___-__-__",
            matrix = pattern ? pattern : matrix_def,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = e.currentTarget.value.replace(/\D/g, "");
        if(e.currentTarget.selectionStart! < 2) {
            e.preventDefault();
        }
        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\\d])/g)!.length) {
                e.currentTarget.value = '';
                return;
            }
        }
        if (def.length >= val.length) {
                val = def;
        }
        e.currentTarget.value = matrix.replace(/./g, function (a: string) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
        if(val.length>=11) {
            setGoodInput(true)
        }
        else {
            setGoodInput(false)
        }
        if(val.length>0) {
            setPlaceholderVisible(true)
        }
        else {
            setPlaceholderVisible(false)
        }
        console.log(val)
        setValue(val)
    }

    return (
        <div className="phone-input__container">
            <div className={`phone-input${alertSignal?'--active':''}`}>
                <div className="phone-input__wrapper">
                    {placeholderVisible && <div className="phone-input__placeholder">Телефон</div>}
                    <input id="phone-input" type="text" placeholder="Телефон" onKeyDown={eventCalllback} onBlur={eventCalllback} onFocus={eventCalllback} onInput={eventCalllback}/>
                </div>
                {goodInput && 
                    <img className="phone-input__img" src={dawGreen} alt="dawGreen" />
                }
                {!goodInput && alertSignal && 
                    <img className="phone-input__img" src={cancel} alt="cancel" />
                }
            </div>
        </div>
    )
}

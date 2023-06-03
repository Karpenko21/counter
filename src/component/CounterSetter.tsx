import React, {ChangeEvent, useEffect} from 'react';
import s from "./Counter.module.css"
import {Button} from "./Button";

export type CounterPropsType = {
    value: number
    maxValue: number
    minValue: number
    error: string

    callbackForValue: (value: number) => void
    callbackForMaxValue: (maxValue: number) => void
    callbackForMinValue: (minValue: number) => void
    callbackForError: (error: string) => void

    errorWarning: string
    messageAfterError: string
}

export const CounterSetter: React.FC<CounterPropsType> = (
    {
        maxValue,
        minValue,
        error,

        callbackForValue,
        callbackForMaxValue,
        callbackForMinValue,
        callbackForError,

        errorWarning,
        messageAfterError
    }
) => {
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = Number(e.currentTarget.value)
        callbackForMaxValue(newMaxValue)
        if (newMaxValue <= minValue || newMaxValue < 0) {
            callbackForError(errorWarning)
        } else {
            callbackForError(messageAfterError)
        }
    }
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newMinValue = Number(e.currentTarget.value)
        callbackForMinValue(newMinValue)
        if (newMinValue >= 0 && newMinValue < maxValue) {
            callbackForError(messageAfterError)
        } else {
            callbackForError(errorWarning)
        }
    }


    useEffect(() => {
        let storageMaxValueAsString = localStorage.getItem('counterMaxValue')
        let storageMinValueAsString = localStorage.getItem('counterMinValue')
        let storageValueAsString = localStorage.getItem('counterValue')

        if (storageMaxValueAsString) {
            let storageMaxValue = JSON.parse(storageMaxValueAsString)
            callbackForMaxValue(storageMaxValue)
        }
        if (storageMinValueAsString) {
            let storageMinValue = JSON.parse(storageMinValueAsString)
            callbackForMinValue(storageMinValue)
        }
        if (storageValueAsString) {
            let storageValue = JSON.parse(storageValueAsString)
            callbackForValue(storageValue)
        }
    }, [])


    const ChangeValues = () => {
        localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
        localStorage.setItem('counterMinValue', JSON.stringify(minValue))
        localStorage.setItem('counterValue', JSON.stringify(minValue))
        callbackForError('')
        callbackForValue(minValue)
    }

    return (
        <div className={s.counter}>
            <div className={s.panel}>
                <div className={s.panelInputValue}>
                    <span>Max value:
                        <input type={"number"}
                               value={maxValue}
                               className={error === errorWarning ? s.error : s.input}
                               onChange={onChangeMaxValueHandler}/></span>
                </div>
                <div className={s.panelInputValue}>
                    <span>Start value:
                        <input type={"number"}
                               value={minValue}
                               className={error === errorWarning ? s.error : s.input}
                               onChange={onChangeMinValueHandler}/></span>
                </div>
            </div>
            <div className={s.buttonsContainer}>
                <Button name={'Set'}
                        callback={ChangeValues}
                        disabled={error === errorWarning}
                        className={error === errorWarning ? s.disabled : s.button}/>
            </div>
        </div>
    )
}


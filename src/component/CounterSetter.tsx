import React, {ChangeEvent, useEffect, useState} from 'react';
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
        value,
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
        if (newMaxValue <= minValue || newMaxValue < 0) {
            callbackForMaxValue(newMaxValue)
            callbackForError(errorWarning)
        } else {
            callbackForMaxValue(newMaxValue)
            callbackForError(messageAfterError)
        }
        callbackForMaxValue(Number(e.currentTarget.value))
    }
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newMinValue = Number(e.currentTarget.value)
        if (newMinValue >= 0 && newMinValue < maxValue) {
            callbackForMinValue(newMinValue)
            callbackForError(messageAfterError)
        } else {
            callbackForMinValue(newMinValue)
            callbackForError(errorWarning)
        }
    }


    useEffect(() => {
        let storageMaxValueAsString = localStorage.getItem('counterMaxValue')
        let storageMinValueAsString = localStorage.getItem('counterMinValue')

        if (storageMaxValueAsString) {
            let storageMaxValue = JSON.parse(storageMaxValueAsString)
            callbackForMaxValue(storageMaxValue)
        }
        if (storageMinValueAsString) {
            let storageMinValue = JSON.parse(storageMinValueAsString)
            callbackForMinValue(storageMinValue)
        }
    }, [])


    const ChangeValues = () => {
        localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
        localStorage.setItem('counterMinValue', JSON.stringify(minValue))
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


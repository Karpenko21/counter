import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./Counter.module.css"
import {Button} from "./Button";

type CounterSetterPropsType = {}

export const CounterSetter = (props: CounterSetterPropsType) => {

    const [maxValue, setMaxValue] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(0)

    const [error, setError] = useState<string>('')

/*
    useEffect( () => {
        let storageMaxValueAsString = localStorage.getItem('counterMaxValue')
        if (storageMaxValueAsString) {
            let storageMaxValue = JSON.parse(storageMaxValueAsString)
            setMaxValue(storageMaxValue)
        }
    }, [])


    useEffect( () => {
        localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
    }, [maxValue])

    useEffect( () => {
        let storageMinValueAsString = localStorage.getItem('counterMinValue')
        if (storageMinValueAsString) {
            let storageMinValue = JSON.parse(storageMinValueAsString)
            setMaxValue(storageMinValue)
        }
    }, [])

    useEffect( () => {
        localStorage.setItem('counterMinValue', JSON.stringify(minValue))
    }, [minValue])*/


    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = Number(e.currentTarget.value)
        if (newMaxValue <= minValue || newMaxValue < 0) {
            setMaxValue(newMaxValue)
            setError('Incorrect value')
        } else {
            setMaxValue(newMaxValue)
            setError('Enter values and press "set"')
        }
       /* setMaxValue(Number(e.currentTarget.value))*/
    }
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newMinValue = Number(e.currentTarget.value)
        if (newMinValue >= 0 && newMinValue < maxValue) {
            setMinValue(newMinValue)
            setError('Enter values and press "set"')
        } else {
            setMinValue(newMinValue)
            setError('Incorrect value')
        }
    }

    return (
        <div className={s.counter}>
            <div className={s.panel}>
                <div className={s.panelInputValue}>
                    <span>Max value:
                        <input type={"number"}
                               value={maxValue}
                               className={error === 'Incorrect value' ? s.error : s.input}
                               onChange={onChangeMaxValueHandler}/></span>
                </div>
                <div className={s.panelInputValue}>
                    <span>Start value:
                        <input type={"number"}
                               value={minValue}
                               className={error === 'Incorrect value' ? s.error : s.input}
                               onChange={onChangeMinValueHandler}/></span>
                </div>
            </div>
            <div className={s.buttonsContainer}>
                <Button name={'Set'}
                        callback={() => {
                }}
                        disabled={error === 'Incorrect value' }
                        className={error === 'Incorrect value' ? s.disabled : s.button }/>
            </div>
        </div>
    )
}


import React, {useState} from 'react';
import {Button} from "./Button";
import s from "./Counter.module.css"

type CounterPropsType = {}

export const Counter = (props: CounterPropsType) => {
    const maxValue: number = 5
    const minValue: number = 0

    const [value, setValue] = useState(0)
    const onClickIncHandler = () => {
        setValue(value + 1)
    }

    const onClickResetHandler = () => {
        setValue(minValue)
    }
    return (
        <div className={s.counter}>
            <div className={s.panel}>
                <div className={value === maxValue ? s.maxValue : s.value}>
                    {value}
                </div>
            </div>
            <div className={s.buttonsContainer}>
                <Button name={"Inc"}
                        callback={onClickIncHandler}
                        disabled={value === maxValue}
                        className={value === maxValue ? s.disabled : s.button }/>
                <Button name={"Reset"}
                        callback={onClickResetHandler}
                        disabled={value === minValue}
                        className={value === minValue ? s.disabled : s.button }/>
            </div>
        </div>
    )
}


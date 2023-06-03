import React from 'react';
import {Button} from "./Button";
import s from "./Counter.module.css"
import {CounterPropsType} from "./CounterSetter";


export const Counter: React.FC<CounterPropsType> = (
    {
        value,
        maxValue,
        minValue,
        error,
        callbackForValue,
        errorWarning,
        messageAfterError
    }
) => {

    const onClickIncHandler = () => {
        callbackForValue(value + 1)
    }

    const onClickResetHandler = () => {
        callbackForValue(minValue)
    }
    return (
        <div className={s.counter}>
            <div className={s.panel}>
                <div className={
                    error === errorWarning
                        ? s.errorWarning
                        : error === messageAfterError
                            ? s.messageAfterError
                            : value === maxValue
                                ? s.maxValue
                                : s.value}
                >
                    {error === errorWarning
                        ? errorWarning
                        : error === messageAfterError
                            ? messageAfterError
                            : value}
                </div>
            </div>
            <div className={s.buttonsContainer}>
                <Button name={"Inc"}
                        callback={onClickIncHandler}
                        disabled={value === maxValue ? true : !!error}
                        className={value === maxValue
                            ? s.disabled
                            : error
                                ? s.disabled
                                : s.button}/>
                <Button name={"Reset"}
                        callback={onClickResetHandler}
                        disabled={value === minValue ? true : !!error}
                        className={value === minValue
                            ? s.disabled
                            : error
                                ? s.disabled
                                : s.button}/>
            </div>
        </div>
    )
}


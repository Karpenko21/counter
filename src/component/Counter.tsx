import React from 'react';
import {Button} from "./Button";
import s from "./Counter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {clickIncAC, clickResetAC, CounterVariablesType} from "../state/counterReducer";


export const Counter = () => {

    const counterVariables = useSelector<AppRootStateType, CounterVariablesType>(state => state.counterVariables)
    const dispatch = useDispatch();

    const onClickIncHandler = () => {
        dispatch(clickIncAC())
    }

    const onClickResetHandler = () => {
        dispatch(clickResetAC())
    }


    const classNamePanel = counterVariables.error === counterVariables.errorWarning
        ? s.errorWarning
        : counterVariables.error === counterVariables.messageAfterError
            ? s.messageAfterError
            : counterVariables.value === counterVariables.maxValue
                ? s.maxValue
                : s.value

    const panel = counterVariables.error === counterVariables.errorWarning
        ? counterVariables.errorWarning
        : counterVariables.error === counterVariables.messageAfterError
            ? counterVariables.messageAfterError
            : counterVariables.value

    const classNameInc = counterVariables.value === counterVariables.maxValue
        ? s.disabled
        : counterVariables.error
            ? s.disabled
            : s.button

    const inkIsDisabled = counterVariables.value === counterVariables.maxValue ? true : !!counterVariables.error

    const classNameReset = counterVariables.value === counterVariables.minValue
            ? s.disabled
            : counterVariables.error
                ? s.disabled
                : s.button

    const resetIsDisabled = counterVariables.value === counterVariables.minValue ? true : !!counterVariables.error


    return (
        <div className={s.counter}>
            <div className={s.panel}>
                <div className={classNamePanel}>
                    {panel}
                </div>
            </div>
            <div className={s.buttonsContainer}>
                <Button name={"Inc"}
                        callback={onClickIncHandler}
                        disabled={inkIsDisabled}
                        className={classNameInc}/>
                <Button name={"Reset"}
                        callback={onClickResetHandler}
                        disabled={resetIsDisabled}
                        className={classNameReset}/>
            </div>
        </div>
    )
}


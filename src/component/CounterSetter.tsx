import React, {ChangeEvent} from 'react';
import s from "./Counter.module.css"
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {changeMaxValueAC, changeMinValueAC, changeValuesAC, CounterVariablesType} from "../state/counterReducer";


export const CounterSetter = () => {

    const counterVariables = useSelector<AppRootStateType, CounterVariablesType>(state => state.counterVariables)
    const dispatch = useDispatch();

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxValueAC(Number(e.currentTarget.value)))
    }
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMinValueAC(Number(e.currentTarget.value)))
    }


/*

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
*/


    const сhangeValues = () => {
   /*     localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
        localStorage.setItem('counterMinValue', JSON.stringify(minValue))
        localStorage.setItem('counterValue', JSON.stringify(minValue))*/
     dispatch(changeValuesAC())
    }

    return (
        <div className={s.counter}>
            <div className={s.panel}>
                <div className={s.panelInputValue}>
                    <span>Max value:
                        <input type={"number"}
                               value={counterVariables.maxValue}
                               className={counterVariables.error === counterVariables.errorWarning ? s.error : s.input}
                               onChange={onChangeMaxValueHandler}/></span>
                </div>
                <div className={s.panelInputValue}>
                    <span>Start value:
                        <input type={"number"}
                               value={counterVariables.minValue}
                               className={counterVariables.error === counterVariables.errorWarning ? s.error : s.input}
                               onChange={onChangeMinValueHandler}/></span>
                </div>
            </div>
            <div className={s.buttonsContainer}>
                <Button name={'Set'}
                        callback={сhangeValues}
                        disabled={counterVariables.error === counterVariables.errorWarning}
                        className={counterVariables.error === counterVariables.errorWarning ? s.disabled : s.button}/>
            </div>
        </div>
    )
}


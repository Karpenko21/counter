import React, {useState} from 'react';
import {Button} from "./Button";

type CounterPropsType = {

}

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
        <div className={"counter"}>
            <div className={value === maxValue ? "maxValue" : "value"}>
                {value}
            </div>
            <div className={"buttonContainer"}>
                <Button name={"inc"}
                        callback={onClickIncHandler}
                        disabled={value === maxValue}
                        className={"button"}/>
                <Button name={"reset"}
                        callback={onClickResetHandler}
                        disabled={value === minValue}
                        className={"button"}/>
            </div>
        </div>
    )
}


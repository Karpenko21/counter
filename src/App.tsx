import React, {useState} from 'react';
import './App.css';
import {Counter} from "./component/Counter";
import {CounterSetter} from "./component/CounterSetter";

function App() {

    const [maxValue, setMaxValue] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(0)
    const [value, setValue] = useState(minValue)
    const [error, setError] = useState<string>('')

    const errorWarning = 'Incorrect value!'
    const messageAfterError = 'Enter values and press "set"'

    return (
        <div className="App">
            <CounterSetter
                maxValue={maxValue}
                minValue={minValue}
                error={error}
                value={value}

                callbackForMaxValue={setMaxValue}
                callbackForMinValue={setMinValue}
                callbackForError={setError}
                callbackForValue={setValue}

                errorWarning={errorWarning}
                messageAfterError={messageAfterError}/>

            <Counter
                maxValue={maxValue}
                minValue={minValue}
                error={error}
                value={value}

                callbackForMaxValue={setMaxValue}
                callbackForMinValue={setMinValue}
                callbackForError={setError}
                callbackForValue={setValue}

                errorWarning={errorWarning}
                messageAfterError={messageAfterError}/>
        </div>
    )
}

export default App;

import React, {useState} from 'react';
import './App.css';
import {Counter} from "./component/Counter";

function App() {

    const [value, setValue] = useState(0)

    return (
        <div className="App">
            <Counter value={value} onClick={setValue}/>
        </div>
    );
}

export default App;

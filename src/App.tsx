import React, {useState} from 'react';
import './App.css';
import {Counter} from "./component/Counter";
import {CounterSetter} from "./component/CounterSetter";

function App() {

    return (
        <div className="App">
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <CounterSetter/>
            <Counter/>
        </div>
    );
}

export default App;

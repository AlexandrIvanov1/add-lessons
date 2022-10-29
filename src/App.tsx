import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";

type DataType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {

    let [data, setData] = useState<Array<DataType>>([])

    const showData = () => {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(json => setData(json))
    }

    const cleanData = () => {
        setData([])
    }

    return (
        <div className="App">
            <Button name={'Show data'} callback={showData}/>
            <Button name={'Clean data'} callback={cleanData}/>
            <ul>
                {data.map(d => {
                    return (
                        <li key={d.id}>
                            <span>{d.id}.</span>
                            <span>{d.title} - </span>
                            <span>{d.completed.toString()}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;

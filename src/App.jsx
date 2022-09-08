import logo from './logo.svg';
import './App.css';
import { Form } from './Components/Form';
import { Count } from './Components/Count';
import { Child } from './Components/Child';
import { Form as FormClass } from './ClassComponents/Form'
import { Count as CountClass } from './ClassComponents/Count'
import { useState } from 'react';

export const App = () => {
  const [name, setName] = useState('Абитуриент Черныш П.А.');
  const [number, setNumber] = useState(0);

  const handleChengeChild = (ev) => {
    setName(ev.target.value)
  }

  return (
    <div className="App">
      <Count city="Москва не спит, а пашет" />
      <Form />
      <hr />
      <h3>Parent component</h3>
      <input onChange={handleChengeChild} />
      <p>{number}</p>
      <h3>Child component</h3>
      <Child name={name} handleChengeNumber={setNumber} />
      <hr />

      {/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/*       <CountClass hren={100500} />
      <hr />
      <FormClass /> */}


    </div>
  );
}

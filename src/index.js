import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';


/* Старый вариант написания
const span = React.createElement('span', {}, 'Ну типо привет! Я span');
const element = React.createElement('h1', { className: "Myclass" }, span);
*/

const Element = () => {
  return <div> Ну типо привет </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();

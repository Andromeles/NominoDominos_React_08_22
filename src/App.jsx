import './App.css';

import { useState } from 'react';
import { Messages } from './Lesson1.1/Message';

export const App = () => {
  const [text, setText] = useState('Абитуриент Черныш П.А.');

  const handleEntry = (ev) => {
    setText(ev.target.value)
  }

  return (
    <div className="App">
      <Messages text={text} />
      <input onChange={handleEntry} placeholder={text} />
    </div>
  );
}

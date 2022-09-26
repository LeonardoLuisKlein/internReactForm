import React from 'react';
import { Checkbox } from './components/micro/checkbox/Checkbox'
import { Title } from './components/micro/title/Title'
import { Buttons } from './components/micro/buttons/Buttons'

function App() {
  return (
    <div className="App">
      <Checkbox />
      <Title idTitle="title" title="Intern Sign Up" />
      <Buttons classButton="smallButton" textButton="Register" />
    </div>
  );
}

export default App;

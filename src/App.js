import React from 'react';
import { Checkbox } from './components/micro/checkbox/Checkbox'
import { Title } from './components/micro/title/Title'
import { Buttons } from './components/micro/buttons/Buttons'
import { Inputs } from './components/micro/inputs/Inputs'

function App() {
  return (
    <div className="App">
      <Checkbox />
      <Title idTitle="title" title="Intern Sign Up" />
      <Buttons classButton="smallButton" textButton="Register" />
      <Inputs labelText="Oi" labelFor="Oi" inputType="text" inputId="Oi" inputClass="bigInput" placehInput="Teste1" />
      <Inputs labelText="Tchau" labelFor="Tchau" inputType="date" inputId="Tchau" inputClass="smallInput" placehInput="Teste2" />
      <Inputs labelText="Oi *" labelFor="OiDnv" inputType="password" inputId="OiDnv" inputClass="mediumInput" placehInput="Teste3" />
    </div>
  );
}

export default App;

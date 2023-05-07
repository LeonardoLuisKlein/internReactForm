import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Home.scss";

import { Title } from "../../micro/title/Title";
import { Inputs } from "../../micro/inputs/Inputs";
import { Buttons } from "../../micro/buttons/Buttons";
import { Checkbox } from "../../micro/checkbox/Checkbox";
import { Image } from "../../micro/image/Image";

export const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isChecked, setIsChecked] = useState(false);
  const [isValidCheckbox, setIsValidCheckbox] = useState(true);

  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleCheckboxChange = (isChecked) => {
    setIsChecked(isChecked);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const nameRegex = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    const isValidNameInput = nameRegex.test(name);
    setIsValidName(isValidNameInput);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmailInput = emailRegex.test(email);
    setIsValidEmail(isValidEmailInput);

    const passwordRegex = /^[0-9]{6,9}$/;
    const isValidPasswordInput = passwordRegex.test(password);
    setIsValidPassword(isValidPasswordInput);

    const isValidCheckboxInput = isChecked;
    setIsValidCheckbox(isValidCheckboxInput);

    if (isValidNameInput && isValidEmailInput && isValidPasswordInput && isValidCheckboxInput) {
      navigate('/success')
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div id="title">
        <Title idTitle="basicTitle" title="Intern Sign Up" />
        <Image imageClass="titleImage"/>
      </div>
        <div id="forms">
        <Inputs
          labelText="FullName*"
          inputType="text"
          inputId="bigInput"
          placehInput="Name"
          errorMessage="FullName Invalid"
          containerType="bigContainer"
          value={name}
          onChange={handleNameChange}
          regex={/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/}
          isValid={isValidName}
        />
        <Inputs
          labelText="Email*"
          inputType="text"
          inputId="mediumInput"
          placehInput="foo@bar.com"
          errorMessage="Email Invalid"
          containerType="mediumContainer"
          value={email}
          onChange={handleEmailChange}
          regex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
          isValid={isValidEmail}
        />
        <Inputs
          labelText="Phone"
          inputType="number"
          inputId="smallInput"
          placehInput="(83) 00000-0000"
          containerType="smallContainer"
        />
        <Inputs
          labelText="Password*"
          inputType="password"
          inputId="mediumInput"
          placehInput="Enter your password"
          errorMessage="Password Invalid"
          containerType="mediumContainer"
          value={password}
          onChange={handlePasswordChange}
          regex={/^[0-9]{6,9}$/}
          isValid={isValidPassword}
        />
        <Inputs
          labelText="Birthday"
          inputType="date"
          inputId="smallInput"
          containerType="smallContainer"
        />
        </div>
        <div className="footer">
          <Checkbox 
          checked={isChecked} 
          onChange={handleCheckboxChange} 
          isValid={isValidCheckbox} />
          <Buttons 
          classButton="smallButton" 
          textButton="Register" 
          type="submit"/>
      </div>
    </form>
  );
};

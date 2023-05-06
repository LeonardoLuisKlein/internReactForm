import React from "react";
import "./Home.scss";

import { Title } from "../../micro/title/Title";
import { Inputs } from "../../micro/inputs/Inputs";
import { Buttons } from "../../micro/buttons/Buttons";
import { Checkbox } from "../../micro/checkbox/Checkbox";
import { Image } from "../../micro/image/Image";

export const Home = () => {
  return (
    <section>
      <div id="title">
        <Title idTitle="basicTitle" title="Intern Sign Up" />
        <Image imageClass="titleImage"/>
      </div>
        <div id="forms">
        <Inputs
          labelText="FullName*"
          labelFor="Name"
          inputType="text"
          inputId="Name"
          inputClass="bigInput flexInput"
          placehInput="Name"
          inputSpan="FullName Invalid"
          containerType="bigContainer"
        />
        <Inputs
          labelText="Email*"
          labelFor="email"
          inputType="text"
          inputId="email"
          inputClass="mediumInput flexInput"
          placehInput="foo@bar.com"
          inputSpan="Email Invalid"
          containerType="mediumContainer"
        />
        <Inputs
          labelText="Phone"
          labelFor="phone"
          inputType="number"
          inputId="phone"
          inputClass="smallInput flexInput"
          placehInput="(83) 00000-0000"
          containerType="smallContainer"
        />
        <Inputs
          labelText="Password*"
          labelFor="password"
          inputType="password"
          inputId="password"
          inputClass="mediumInput flexInput"
          placehInput="Enter your password"
          inputSpan="Password Invalid"
          containerType="mediumContainer"
        />
        <Inputs
          labelText="Birthday*"
          labelFor="birthday"
          inputType="date"
          inputId="birthday"
          inputClass="smallInput flexInput"
          inputSpan="Age Invalid"
          containerType="smallContainer"
        />
        </div>
        <div className="footer">
          <Checkbox />
          <Buttons classButton="smallButton" textButton="Register" />
      </div>
    </section>
  );
};

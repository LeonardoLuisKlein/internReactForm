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
        <Title idTitle="basicTitle" title="Intern Sign Up" />
        <Image />
        <div className="forms">
        <Inputs
          labelText="FullName*"
          labelFor="Name"
          inputType="text"
          inputId="Name"
          inputClass="bigInput"
          placehInput="Name"
        />
        <Inputs
          labelText="Email*"
          labelFor="email"
          inputType="text"
          inputId="email"
          inputClass="mediumInput"
          placehInput="foo@bar.com"
        />
        <Inputs
          labelText="Phone"
          labelFor="phone"
          inputType="number"
          inputId="phone"
          inputClass="smallInput"
          placehInput="(83) 00000-0000"
        />
        <Inputs
          labelText="Password*"
          labelFor="password"
          inputType="password"
          inputId="password"
          inputClass="mediumInput"
          placehInput="Enter your password"
        />
        <Inputs
          labelText="Birthday*"
          labelFor="birthday"
          inputType="date"
          inputId="birthday"
          inputClass="smallInput"
        />
        </div>
        <div className="footer">
          <Checkbox />
          <Buttons classButton="smallButton" textButton="Register" />
      </div>
    </section>
  );
};

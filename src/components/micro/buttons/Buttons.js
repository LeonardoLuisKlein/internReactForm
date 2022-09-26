import React from "react";
import './Buttons.scss'

export const Buttons = (props) => {
  return (
    <button className={props.classButton} onClick={props.onClick}>
      {props.textButton}
    </button>
  );
};

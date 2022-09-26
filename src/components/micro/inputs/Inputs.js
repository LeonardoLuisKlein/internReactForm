import React from 'react'
import './Inputs.scss'

export function Inputs(props) {
  return (
    <div id="inputContainer">
         <label
        className="labelInput"
        htmlFor={props.labelFor}
      >
        {props.labelText}
      </label>
      <input
        type={props.inputType}
        id={props.inputId}
        className={props.inputClass}
        placeholder={props.placehInput}
        onChange={props.handleChange}
      />
    </div>
  )
}

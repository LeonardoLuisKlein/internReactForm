import React from 'react'
import './Checkbox.scss'

export const Checkbox = (props) => {
  const { label, checked, onChange, errorMessage, isValid } = props;

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    onChange(isChecked);
  };
  return (
    <div id="chkContainer">
    <div id="chkInputLabel">
    <input
      type="checkbox"
      id="checkbox"
      checked={checked}
      onChange={handleCheckboxChange}

    />
    <label id="checkLabel" for="checkbox">
      I accept the terms and privacy</label>
    </div>
    {!isValid && <span id="chkError" aria-live="assertive">You must accept the terms</span>}
  </div>
  )
}
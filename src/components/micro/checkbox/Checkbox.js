import React from 'react'
import './Checkbox.scss'

export const Checkbox = () => {
  return (
    <div id="chkContainer">
    <div id="chkInputLabel">
    <input
      type="checkbox"
      id="checkbox"
    />
    <label id="checkLabel" for="checkbox">
      I accept the terms and privacy
    </label>
    </div>
    <span id="chkError">You must accept the terms</span>
  </div>
  )
}
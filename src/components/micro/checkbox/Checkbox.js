import React from 'react'
import './Checkbox.scss'

export const Checkbox = () => {
  return (
    <div id="chkContainer">
    <input
      type="checkbox"
      id="checkbox"
    />
    <span id="checkLabel" for="checkbox">
      I accept the terms and privacy
    </span>
  </div>
  )
}
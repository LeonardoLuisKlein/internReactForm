import React from 'react'
import './Checkbox.scss'

export const Checkbox = () => {
  return (
    <div>
    <input
      type="checkbox"
      id="checkbox"
    />
    <span id="checkLabel">
      I accept the terms and privacy
    </span>
  </div>
  )
}
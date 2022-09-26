import React from 'react'
import './Title.scss'

export const Title = (props) => {
  return (
    <h1 id={props.idTitle}>
        {props.title}
    </h1>
  )
}

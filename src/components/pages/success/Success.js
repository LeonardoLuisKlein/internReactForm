import React from 'react'

import './Success.scss'

import { Title } from "../../micro/title/Title";
import { Buttons } from "../../micro/buttons/Buttons";
import { Image } from "../../micro/image/Image";

export const Success = () => {
  return (
    <section className='successSec'>
        <Title idTitle="basicTitle" title="Success!" />
        <Image />
        <div className='buttonCenter'>
        <Buttons classButton="bigButton" textButton="Back to home page" />
        </div>
    </section>
  )
}

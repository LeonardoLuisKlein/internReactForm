import React from 'react'
import { useNavigate } from 'react-router-dom';

import './Success.scss'

import { Title } from "../../micro/title/Title";
import { Buttons } from "../../micro/buttons/Buttons";
import { Image } from "../../micro/image/Image";

export const Success = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envio do formulário

    // Após o envio bem-sucedido do formulário, navegar para a página de sucesso
    navigate('/');
  };


  return (
    <form id='successSec' onSubmit={handleSubmit}>
        <div id="title">
        <Title idTitle="basicTitle" title="Success!" />
        <Image imageClass="titleImage"/>
        </div>
        <div className='buttonCenter'>
        <Buttons classButton="bigButton" textButton="Back to home page" type="submit"/>
        </div>
    </form>
  )
}

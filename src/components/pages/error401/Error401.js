import React from 'react'
import Imagem from "../../../assets/error401.svg";
import "./Error401.scss";

export const Error401 = () => {
  return (
    <div className="errorPage">
        <img src={Imagem} alt="Erro 401" className="errorGif"/>
    </div>
  )
}

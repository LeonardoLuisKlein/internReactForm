import React from "react";
import Imagem from "../../../assets/data.png";
import "./Image.scss";

export function Image(props){
  return (
    <div className="imageAlign">
      <img data-testid="img-logo" src={Imagem} alt="logo" className={props.imageClass} />
    </div>
  );
};

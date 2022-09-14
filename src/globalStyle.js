import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle `
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400&display=swap");    

* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        outline: none;
        background: #ECEEF2;
    }
`

export default globalStyle
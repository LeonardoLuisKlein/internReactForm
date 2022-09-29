import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle `  

* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }

#root{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: #D1D1D1;
}
  
`

export default globalStyle
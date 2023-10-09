import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  :focus{
    outline:none;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background: ${(props) => props.theme['background']};
    color: ${(props) => props.theme['base-text']}
  }

  body, input, textarea, button{
    font-weight: 400;
    font-size: 1rem;
  }

`
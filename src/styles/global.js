import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  *:focus{
    outline: none;
  }
  :root{
    font-size: 62.5%;
    font-family: 'Roboto Slab', serif;
  }
  body{
    background: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};
  }
`
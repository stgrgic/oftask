import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background};
    font-family: ${(props) => props.theme.fonts.body};
    padding: 0;
    margin: 0;
    min-height: 120vh;
    padding-bottom: 100px;
  }
`
export default GlobalStyle

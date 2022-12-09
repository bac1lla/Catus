import {createGlobalStyle} from "styled-components";
import {fadeIn} from "./animations";

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto'),
    url("./../assets/fonts/Roboto-Regular.woff") format("woff"),
    url("./../assets/fonts/Roboto-Regular.woff2") format("woff2")
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: local('Roboto'),
    url("./../assets/fonts/Roboto-Medium.woff") format("woff"),
    url("./../assets/fonts/Roboto-Medium.woff2") format("woff2")
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: local('Roboto'),
    url("./../assets/fonts/Roboto-Bold.woff") format("woff"),
    url("./../assets/fonts/Roboto-Bold.woff2") format("woff2")
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    font-weight: 400;
  }
  
  #root {
    height: 100vh;
  }
  
  ${fadeIn}
`
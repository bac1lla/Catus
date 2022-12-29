import {createGlobalStyle} from "styled-components";

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
    
    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: rgb(179, 177, 177);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgb(136, 136, 136);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: rgb(100, 100, 100);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:active {
      background: rgb(68, 68, 68);
      border-radius: 10px;
    }
  }
  
  #root {
    height: 100vh;
  }

  
  
`
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background: #fff;
        font-family: 'Roboto', sans-serif;
    }

    *::-webkit-scrollbar {
        display: none;
    }
`;

export default GlobalStyle;

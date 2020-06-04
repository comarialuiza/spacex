import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    img {
        max-width: 100%;
    }

    button {
        cursor: pointer;
    }

    body {
        font: 14px 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    ul {
        list-style: none;
    }
`;
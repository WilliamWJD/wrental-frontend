import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    button, input, textarea, select, body, span, strong{
        font: 400 1rem "Roboto", sans-serif;
    }

    button{
        cursor: pointer;
    }

    ul{
        list-style: none;
    }

    a{
        color: inherit;
        text-decoration: none;
    }
`
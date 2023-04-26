import { createGlobalStyle } from "styled-components";

const DefaultStyle = createGlobalStyle`
    :root{
        font-size: 16px;
    }
    
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;;
    }

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
    }
`;

export default DefaultStyle;

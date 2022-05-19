import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: white;
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
    font-family: 'Roboto', sans-serif;
  &::-webkit-scrollbar {
    width: 7px;
    /* border: 1px solid rgba(0, 0, 0, 0.1); */
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  }
`;
export default GlobalStyle;
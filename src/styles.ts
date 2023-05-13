import { createGlobalStyle } from 'styled-components'
//import styled from 'styled-components'

export const cores = {
  branca: '#eee',
  rosa: '#E66767',
  dourado: '#FFB930',
  cinzaClaro: '#FFEBD9',
  corClara: '#F5F5F5'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.corClara};
    color: ${cores.rosa};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

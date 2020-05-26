import { createGlobalStyle } from "styled-components"
import theme from './theme'

export default createGlobalStyle`

  html, body {
    height: auto;
    font-size: 1rem;
    color: ${theme.colors.black.primary};
    margin: 0;
  }

  strong {
    font-weight: 600;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    @media (min-width: 768px){
      font-size: 3rem;
    }
  }

  h2 {
    font-size:1.5rem;
    font-weight: 500;
    @media (min-width: 768px){
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 500;
    @media (min-width: 768px){
      font-size: 1.5
    }
  }

  p, span {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.75;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  a{
    color: ${theme.colors.primary} !important;
    &:hover{
      color: ${theme.colors.primary} !important;
      
    }
  }
  a > * {
    color: ${theme.colors.primary} !important;
      color: ${theme.colors.primary} !important;
    }
  

  ::selection {
    color: rgb(255, 255, 255);
    background: ${theme.colors.primary};
  }

  button {
    border-radius: 0 !important;
  }
  



  .slick-slider {
    .slick-slide {
    height: auto;
  }
  .slick-track {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
  }
    .slick-arrow {
      position: absolute;
      top: 50%;
      transform: translate(0,-50%);
      z-index: 1;
      display: none !important;
      @media (min-width: 768px){
        display: block !important;
      }
    }
    .slick-prev{
      display: none !important;
      @media (min-width: 768px){
        display: block !important;
      }
      left: -3rem;
    }
    .slick-next{
      right: -3rem;
    }

`

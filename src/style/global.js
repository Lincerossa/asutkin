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
    color: ${theme.colors.primary};
    @media (min-width: 768px){
      font-size: 3rem;
    }
  }

  h2 {
    font-size:1.5rem;
    font-weight: 500;
    color: ${theme.colors.primary};
    @media (min-width: 768px){
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 500;
    color: ${theme.colors.primary};
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
    cursor: none;
  }

  a{
    color: ${theme.colors.primary} !important;
    text-decoration: none;
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
      position: absolute !important;
      top: 50%;
      transform: translate(0,-50%);
      z-index: 1;
    }
    .slick-prev{
      left: -1.5rem;
      font-size: 1rem;
      background: white;
      border-radius: 50%;
      height: 3rem;
      width: 3rem;
      display: flex !important;
      align-items: center;
      color: ${theme.colors.black.primary};
      justify-content: center;
            
      &:active,
      &:focus {
        background: white;
        color: ${theme.colors.black.primary};
      }
      &:hover{
        background: ${theme.colors.primary};
        color: white;
      }
    }
    .slick-next{
      right: -1.5rem;
      font-size: 1rem;
      background: white;
      border-radius: 50%;
      height: 3rem;
      width: 3rem;
      display: flex !important;
      align-items: center;
      justify-content: center;
      color: ${theme.colors.black.primary};
      
      &:active,
      &:focus {
        background: white;
        color: ${theme.colors.black.primary};
      }
      &:hover{
        background: ${theme.colors.primary};
        color: white;
      }
    }


    .slick-dots {
      padding: .5rem; 
    }
  }

  .ant-modal-close-x {
    padding: 0;
    background: white;
    height: 3rem;
    width: 3rem;

    &:hover{
      background: ${theme.colors.primary};
      color: white;
      cursor: pointer;
    }

    svg {
      font-size: 1.25rem;
    }
  }
`

import styled, { css } from 'styled-components'
import { ButtonTypes } from './types'

type ButtonProps = Pick<ButtonTypes, 'status' | 'totalSelected'>

const buttonModifiers = {
   selected: () => css`
      background: #f5dbdd;
      color: #342e4e;
      border: 2px solid #af8289;
   `,
   counter: ({ totalSelected }: ButtonProps) => {
      if (totalSelected === '0') {
         return css`
            &::after {
               content: ' ';
            }
         `
      }

      return css`
         &::after {
            content: '${totalSelected}';
            line-height: 25px;
            color: white;
            width: 25px;
            height: 25px;
            background: red;
            position: absolute;
            top: -10px;
            right: -12px;
            border-radius: 100%;
         }
      `
   }
}

export const Wrapper = styled.div`
   grid-template-columns: 1fr minmax(320px, 1300px) 1fr;
   grid-template-rows: 180px auto 100px;
   grid-template-areas:
      'menu menu menu'
      'left body right'
      'footer footer footer';
   display: grid;

   footer {
      padding-top: 2rem;
      grid-area: footer;
      text-align: center;
   }
`

export const WrapperMenu = styled.header`
   grid-area: menu;
   background: #342e4e;
   text-align: center;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 1rem;

   @media screen and (max-width: 612px) {
      flex-direction: row;
      justify-content: center;
      gap: 0.5rem;
      padding: 1rem;

      h1,
      p {
         font-size: 100%;
      }
   }
`

export const WrapperContent = styled.main`
   grid-area: body;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   gap: 10px 20px;
   margin: 20px 20px;
`
export const ButtonsWrapper = styled.nav`
   display: flex;
   justify-content: center;
   gap: 2rem;

   @media screen and (max-width: 612px) {
      flex-direction: column;
      gap: 0.5rem;
   }
`
export const Button = styled.button<ButtonProps>`
   ${({ status, totalSelected }) => css`
      padding: 1rem 2rem;
      border-radius: 1rem;
      border: 2px solid white;
      background: transparent;
      font-weight: 500;
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      cursor: pointer;
      transition: 0.3s;
      position: relative;

      @media screen and (max-width: 612px) {
         padding: 0.5rem 2rem;
      }

      &:hover {
         background: rgba(245, 219, 221, 0.25);
         color: #af8289;
         border: 2px solid #af8289;
      }

      ${status && buttonModifiers.selected()}
      ${totalSelected && buttonModifiers.counter({ totalSelected })}
   `}
`

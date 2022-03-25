import { ImageType } from 'contexts/GlobalStorage/types'
import styled, { css } from 'styled-components'
import { ButtonTypes } from './types'

const buttonModifiers = {
   selected: () => css`
      background: #f5dbdd;
      color: #342e4e;
      border: 2px solid #af8289;
   `
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

export const WrapperMenu = styled.nav`
   grid-area: menu;
   background: #342e4e;
   text-align: center;
   padding: 2rem;
   color: white;
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
   margin: 20px 0 0;
   gap: 2rem;
`
export const Button = styled.button<Pick<ButtonTypes, 'status'>>`
   ${({ status }) => css`
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

      ${status && buttonModifiers.selected()}

      &:hover {
         background: rgba(245, 219, 221, 0.25);
         color: #af8289;
         border: 2px solid #af8289;
      }
   `}
`

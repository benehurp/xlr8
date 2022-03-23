import styled from 'styled-components'

export const Wrapper = styled.div`
   grid-template-columns: 1fr minmax(320px, 1260px) 1fr;
   grid-template-rows: 180px auto 100px;
   grid-template-areas:
      'menu menu menu'
      'left body right'
      'footer footer footer';
   display: grid;
   background: #f5dbdd;

   footer {
      padding-top: 2rem;
      grid-area: footer;
      text-align: center;
   }
`

export const WrapperMenu = styled.nav`
   grid-area: menu;
   background: #342e4e;
`

export const WrapperContent = styled.main`
   grid-area: body;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   gap: 10px 20px;
   margin: 20px 0;
`

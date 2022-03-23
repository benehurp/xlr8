import styled from 'styled-components'

export const Wrapper = styled.div`
   grid-template-columns: 1fr minmax(320px, 1260px) 1fr;
   grid-template-rows: 180px auto;
   grid-template-areas:
      'menu menu menu'
      'left body right';
   display: grid;
`

export const WrapperMenu = styled.nav`
   grid-area: menu;
   background: blue;
`

export const WrapperContent = styled.main`
   grid-area: body;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   gap: 10px 20px;
   margin: 10px 0;
`

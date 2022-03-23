import styled from 'styled-components'

export const Wrapper = styled.div`
   position: relative;
`

export const Title = styled.div`
   position: absolute;
   transform: translateX(-50%);
   left: 50%;
   bottom: 10px;
   width: 90%;
   padding: 8px;
   text-align: center;
   color: white;
   background: rgb(0, 0, 0, 0.75);
   border-radius: 0.6rem;
   font-size: 16px;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

   &::before {
      content: ' ';
      width: 100px;
      height: 100px;
      background: url('/assets/arrow-right-circle.svg') center no-repeat;
      top: 50%;
      left: -28px;
      transform: translateY(-50%);
      position: absolute;
   }
`
export const Image = styled.div`
   width: 300px;
   height: 272px;

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.6rem;
   }
`

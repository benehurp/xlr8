import styled from 'styled-components'

export const Wrapper = styled.div`
   position: relative;
`

export const WrapperTitle = styled.div`
   position: absolute;
   transform: translateX(-50%);
   left: 50%;
   bottom: 10px;
   width: 90%;
   padding: 8px;
   background: rgb(0, 0, 0, 0.75);
   border-radius: 0.6rem;

   &::before {
      content: ' ';
      width: 25px;
      height: 25px;
      background: url('/assets/arrow-right-circle.svg') center no-repeat;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
      position: absolute;
   }

   .title {
      text-align: center;
      color: white;
      font-size: 16px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
         Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   }
`
export const Image = styled.div`
   width: 300px;
   height: 272px;
   position: relative;
   transition: 0.3s;
   cursor: pointer;

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.6rem;
   }
   &:hover {
      transform: scale(105%);
   }
`

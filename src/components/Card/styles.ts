import styled from 'styled-components'

export const Wrapper = styled.div`
   position: relative;
`

export const WrapperTitle = styled.div`
   display: flex;
   justify-content: center;
   position: absolute;
   transform: translateX(-50%);
   left: 50%;
   bottom: 10px;
   width: 90%;
   padding: 8px;
   background: rgba(61, 40, 46, 0.75);
   border-radius: 0.6rem;
   z-index: 1;
   transition: 0.3s;

   &:hover {
      background: rgba(52, 46, 78, 1) !important;
   }

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
      width: 165px;
   }
`
export const Image = styled.div`
   width: 300px;
   height: 272px;
   position: relative;
   transition: 0.3s;
   cursor: pointer;
   &:hover {
      transform: scale(105%);
      filter: saturate(125%) drop-shadow(0px 0px 10px rgb(61, 40, 46, 0.9));

      ${WrapperTitle} {
         background: rgba(61, 40, 46, 0.75);
      }
   }

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.6rem;
   }
`

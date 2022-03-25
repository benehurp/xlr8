import { ImageType } from 'contexts/GlobalStorage/types'
import styled, { css } from 'styled-components'

type ImageWrapperType = Pick<ImageType, 'selected'>

const imageModifiers = {
   selectedBorder: () => css`
      border: 5px solid rgba(52, 46, 78, 1);
   `,
   selectedBackground: () => css`
      background: rgba(52, 46, 78, 1);
   `,
   selectedIcon: () => css`
      background: url('/assets/check-circle.svg') center no-repeat !important;
   `,
   hasSeleted: () => css`
      &::before {
         content: ' ';
         width: 25px;
         height: 25px;
         background: url('/assets/check-circle.svg') center no-repeat;
         top: 50%;
         left: 10px;
         opacity: 0.25;
         transition: 0.3s;
         transform: translateY(-50%) scale(100%);
         position: absolute;
      }
   `
}

export const Wrapper = styled.div`
   position: relative;
`

export const WrapperTitle = styled.div<ImageWrapperType>`
   ${({ selected }) => css`
      display: flex;
      justify-content: center;
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
      bottom: 10px;
      width: 90%;
      padding: 8px;
      background: rgba(61, 40, 46, 0.5);
      border-radius: 0.6rem;
      z-index: 1;
      transition: 0.3s;
      ${selected && imageModifiers.selectedBackground()}

      &:hover {
         background: rgba(52, 46, 78, 1) !important;

         &::before {
            opacity: 1 !important;
            ${selected && imageModifiers.selectedIcon()}
         }
      }

      ${selected && imageModifiers.hasSeleted()}

      .title {
         text-align: center;
         color: white;
         width: 165px;
      }
   `}
`
export const Image = styled.div<ImageWrapperType>`
   ${({ selected }) => css`
      width: 300px;
      height: 272px;
      position: relative;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
         transform: scale(105%);
         filter: saturate(135%) drop-shadow(0px 0px 10px rgb(61, 40, 46, 0.9));

         ${WrapperTitle} {
            background: rgba(61, 40, 46, 0.75);
            ${selected && imageModifiers.selectedBackground()}

            &::before {
               content: ' ';
               width: 25px;
               height: 25px;
               background: url('/assets/circle.svg') center no-repeat;
               top: 50%;
               left: 10px;
               opacity: 0.25;
               transition: 0.3s;
               transform: translateY(-50%) scale(100%);
               position: absolute;
               ${selected && imageModifiers.selectedIcon()}
            }
         }
      }

      img {
         width: 100%;
         height: 100%;
         object-fit: cover;
         border-radius: 0.6rem;
         ${selected && imageModifiers.selectedBorder()}
      }
   `}
`

import { ImageType } from 'contexts/GlobalStorage/types'
import React from 'react'
import * as S from './styles'

const Card = ({ image_id, title, url }: ImageType) => {
   return (
      <S.Wrapper>
         <S.Image>
            <S.Title>{title}</S.Title>

            <img src={url} />
         </S.Image>
      </S.Wrapper>
   )
}

export default Card

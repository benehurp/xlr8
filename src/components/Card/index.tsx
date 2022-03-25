import { ImageType } from 'contexts/GlobalStorage/types'
import React, { useState } from 'react'
import * as S from './styles'

const Card = ({ title, url, image_id, selected }: ImageType) => {
   const characters = title.length
   const limit = 55
   let newTitle = title

   if (characters >= limit) {
      newTitle = `${title.slice(0, limit)}...`
   }

   return (
      <S.Wrapper>
         <S.Image selected={selected}>
            <S.WrapperTitle>
               <p className="title">{newTitle}</p>
            </S.WrapperTitle>
            <img src={url} />
         </S.Image>
      </S.Wrapper>
   )
}

export default Card

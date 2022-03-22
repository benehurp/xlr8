import { useGlobalStorage } from 'contexts/GlobalStorage/useGlobalStoage'
import React from 'react'
import * as S from './styles'

const SinglePage = () => {
   const { data } = useGlobalStorage()
   return (
      <S.Wrapper>
         <S.WrapperMenu></S.WrapperMenu>
         <S.WrapperContent>
            {data.map(({ image_id, title, url }) => (
               <div key={image_id}>
                  <p>{title}</p>
                  <img src={url}></img>
               </div>
            ))}
         </S.WrapperContent>
      </S.Wrapper>
   )
}

export default SinglePage

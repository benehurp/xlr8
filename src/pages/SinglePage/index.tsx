import Card from 'components/Card'
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
               <Card
                  key={image_id}
                  image_id={image_id}
                  title={title}
                  url={url}
               />
            ))}
         </S.WrapperContent>
         <footer>
            Power by <strong>Bene-Hur Pessoa</strong> <br />
            ReactJS Developer
         </footer>
      </S.Wrapper>
   )
}

export default SinglePage

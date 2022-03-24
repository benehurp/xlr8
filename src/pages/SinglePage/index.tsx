import Card from 'components/Card'
import { ImageType } from 'contexts/GlobalStorage/types'
import { useGlobalStorage } from 'contexts/GlobalStorage/useGlobalStoage'
import useLocalStorage from 'hooks/useLocalStorage'
import React, { useEffect, useState } from 'react'
import * as S from './styles'

const SinglePage = () => {
   const { data, fetchImages } = useGlobalStorage()
   const [selection, setSelection] = useState<number[]>([])

   useEffect(() => {
      fetchImages()
   }, [])

   const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const div = event.currentTarget
      const card = JSON.parse(div.id)
      const verifyCard = selection.includes(card)

      if (!verifyCard) {
         return setSelection([...selection, card])
      }
      if (verifyCard) {
         return selection.splice(card - 1, JSON.parse(card))
      }
   }

   return (
      <S.Wrapper>
         <S.WrapperMenu>
            <h1>The beautiful Kittens</h1>
            <p>Test to work with ReactJS</p>
            <S.ButtonsWrapper>
               <button>List all</button>
               <button>My selections</button>
               <button>Reset</button>
            </S.ButtonsWrapper>
         </S.WrapperMenu>
         <S.WrapperContent>
            {data instanceof Array &&
               data.map(({ image_id, title, url, selected }: ImageType) => (
                  <div
                     id={image_id.toString()}
                     key={image_id}
                     onClick={handleClick}
                  >
                     <Card
                        image_id={image_id}
                        title={title}
                        url={url}
                        selected={selected}
                     />
                  </div>
               ))}
         </S.WrapperContent>
         <footer>
            <p>
               Power by <strong>Bene-Hur Pessoa</strong> <br />
               ReactJS Developer
            </p>
         </footer>
      </S.Wrapper>
   )
}

export default SinglePage

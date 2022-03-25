import Card from 'components/Card'
import { ImageType } from 'contexts/GlobalStorage/types'
import { useGlobalStorage } from 'contexts/GlobalStorage/useGlobalStoage'
import useLocalStorage from 'hooks/useLocalStorage'
import React, { useEffect, useState } from 'react'
import * as S from './styles'

const SinglePage = () => {
   const localStorage = useLocalStorage()
   const { data, fetchImages } = useGlobalStorage()
   const [active, setActive] = useState<boolean>()

   useEffect(() => {
      fetchImages()
   }, [])

   const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const div = event.currentTarget
      const card = JSON.parse(div.id) - 1
      const cardSelected = data[card]

      if (cardSelected.selected === false) {
         Object.assign(cardSelected, { selected: true })
      } else {
         Object.assign(cardSelected, { selected: false })
      }
      localStorage.setItem('Data', JSON.stringify(data))
      setActive(!active)
   }

   const CardsList =
      data instanceof Array &&
      data.map(({ image_id, title, url, selected }: ImageType) => (
         <div id={image_id.toString()} key={image_id} onClick={handleClick}>
            <Card
               image_id={image_id}
               title={title}
               url={url}
               selected={selected}
            />
         </div>
      ))

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
         <S.WrapperContent>{CardsList}</S.WrapperContent>
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

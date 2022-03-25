import Card from 'components/Card'
import { ImageType } from 'contexts/GlobalStorage/types'
import { useGlobalStorage } from 'contexts/GlobalStorage/useGlobalStoage'
import useLocalStorage from 'hooks/useLocalStorage'
import React, { useEffect, useState } from 'react'
import * as S from './styles'

const SinglePage = () => {
   const localStorage = useLocalStorage()
   const { data, fetchImages } = useGlobalStorage()
   const [items, setItems] = useState<ImageType[]>()
   const [active, setActive] = useState<boolean>()
   const [listAllStatus, setListAllStatus] = useState<boolean>(true)
   const [mySelectionsStatus, setMySelectionsStatus] = useState<boolean>(false)

   useEffect(() => {
      fetchImages()
   }, [])

   useEffect(() => {
      setItems(data)
   }, [data])

   const mySelections = () => {
      const filter = items!.filter(({ selected }) => selected)
      console.log(filter)
      if (!mySelectionsStatus) {
         setListAllStatus(false)
         setMySelectionsStatus(true)
      }
      setActive(!active)
   }

   const listAll = () => {
      setItems(data)
      setListAllStatus(true)
      setMySelectionsStatus(false)
   }

   const reset = () => {
      setItems(
         Object.assign(
            items!,
            items?.map((item) => Object.assign(item, { selected: false }))
         )
      )
      setItems(data)
      setListAllStatus(true)
      setMySelectionsStatus(false)
      setActive(!active)
   }

   const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const div = event.currentTarget
      const card = JSON.parse(div.id) - 1
      const cardSelected = items![card]

      if (!cardSelected.selected) {
         Object.assign(cardSelected, { selected: true })
         localStorage.setItem('Data', JSON.stringify(data))
         return setActive(!active)
      }
      if (cardSelected.selected) {
         Object.assign(cardSelected, { selected: false })
         localStorage.setItem('Data', JSON.stringify(data))
         return setActive(!active)
      }
   }

   const CardsList =
      items instanceof Array &&
      items!.map(({ image_id, title, url, selected }: ImageType) => (
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
               <S.Button status={listAllStatus} onClick={listAll}>
                  List all
               </S.Button>
               <S.Button status={mySelectionsStatus} onClick={mySelections}>
                  My selections
               </S.Button>
               <S.Button onClick={reset}>Reset</S.Button>
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

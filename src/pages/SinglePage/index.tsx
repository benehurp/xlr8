import Card from 'components/Card'
import { ImageType } from 'contexts/GlobalStorage/types'
import { useGlobalStorage } from 'contexts/GlobalStorage/useGlobalStoage'
//import useLocalStorage from 'hooks/useLocalStorage'
import useActualPosition from 'hooks/useActualPosition'
import React, { useEffect, useState } from 'react'
import * as S from './styles'
import useWheelMouse from 'hooks/useWheelMouse'

const SinglePage = () => {
   //const localStorage = useLocalStorage()
   const [scrollHeight] = useActualPosition()
   const [wheel] = useWheelMouse()
   const { data } = useGlobalStorage()
   const [items, setItems] = useState<ImageType[] | null>(null)
   const [active, setActive] = useState<boolean>()
   const [listAllStatus, setListAllStatus] = useState<boolean>(true)
   const [mySelectionsStatus, setMySelectionsStatus] = useState<boolean>(false)
   const [total, setTotal] = useState<number>(0)
   const [totalSelected, setTotalSelected] = useState<number>(0)
   //const localData = JSON.parse(localStorage.getItem('Data')!)

   useEffect(() => {
      if (data) {
         return listAll()
      }
   }, [data])

   const counter = () => {
      const selects = items!.filter(({ selected }) => selected)
      setTotalSelected(selects.length)
   }

   const listAll = () => {
      const filter = data!.filter((item) => item)
      setTotal(filter.length)
      setItems(filter)
      setListAllStatus(true)
      setMySelectionsStatus(false)
   }

   const mySelections = () => {
      const filter = data!.filter(({ selected }) => selected)
      setItems(filter)
      if (!mySelectionsStatus) {
         setListAllStatus(false)
         setMySelectionsStatus(true)
      }
   }

   const reset = () => {
      const filter = Object.assign(
         data!,
         data?.map((item) => Object.assign(item, { selected: false }))
      )
      setListAllStatus(true)
      setMySelectionsStatus(false)
      setTotalSelected(0)
      setItems(filter)
   }

   const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const target = JSON.parse(event.currentTarget.id)
      const card = items!.map(({ image_id }) => image_id).indexOf(target)
      const cardSelected = items![card]

      if (!cardSelected.selected) {
         Object.assign(cardSelected, { selected: true })
         //localStorage.setItem('Data', JSON.stringify(items))
         counter()
         return setActive(!active)
      }
      if (cardSelected.selected) {
         Object.assign(cardSelected, { selected: false })
         //localStorage.setItem('Data', JSON.stringify(items))
         counter()
         return setActive(!active)
      }
   }

   const CardsList =
      items instanceof Array &&
      items!.map(
         ({ image_id, title, url, selected }: ImageType) => (
            <Card
               key={image_id}
               id={image_id.toString()}
               onClick={handleClick}
               image_id={image_id}
               title={title}
               url={url}
               selected={selected}
            />
         ),
         this
      )

   const Loading = (
      <S.Loading>
         <img src="https://i.gifer.com/1tJG.gif" />
         <h2>Loading cats...</h2>
      </S.Loading>
   )

   const NothingSelected = (
      <S.Loading>
         <img src="https://i.gifer.com/2GU.gif" />
         <h2>You have not selected any kittens!</h2>
      </S.Loading>
   )

   return (
      <S.Wrapper>
         <S.WrapperMenu scrollHeight={scrollHeight} wheel={wheel}>
            <div className="group__titles">
               <h1>The beautiful Kittens</h1>
               <p>Test to work with ReactJS</p>
            </div>
            <S.ButtonsWrapper>
               <S.Button status={listAllStatus} onClick={listAll}>
                  List all ({total}) items
               </S.Button>
               <S.Button
                  status={mySelectionsStatus}
                  totalSelected={JSON.stringify(totalSelected)}
                  onClick={mySelections}
               >
                  My selections
               </S.Button>
               <S.Button onClick={reset}>Reset</S.Button>
            </S.ButtonsWrapper>
         </S.WrapperMenu>
         <S.WrapperContent>
            {}
            {items === null && Loading}
            {!!mySelectionsStatus && totalSelected === 0
               ? NothingSelected
               : CardsList}
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

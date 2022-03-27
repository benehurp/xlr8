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
   const [total, setTotal] = useState<number>(0)
   const [totalSelected, setTotalSelected] = useState<number>(0)

   useEffect(() => {
      fetchImages()

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   useEffect(() => {
      listAll()
   }, [data])

   const counter = () => {
      const selects = items!.filter(({ selected }) => selected)
      setTotalSelected(selects.length)
   }

   const listAll = async () => {
      const filter = await data!.filter((item) => item)
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
         counter()
         return setActive(!active)
      }
      if (cardSelected.selected) {
         Object.assign(cardSelected, { selected: false })
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

   return (
      <S.Wrapper>
         <S.WrapperMenu>
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

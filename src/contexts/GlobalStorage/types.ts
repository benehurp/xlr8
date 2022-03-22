export type ImageType = {
   image_id: number
   title: string
   url: string
}

export type GlobalContextTypes = {
   data: ImageType[]
}

export type GlobalStorageTypes = {
   children: JSX.Element
}

export type ImageType = {
   image_id: number
   title: string
   url: string
   selected: boolean
}

export type GlobalContextTypes = {
   data: ImageType[]
   fetchImages: () => Promise<void>
}

export type GlobalStorageTypes = {
   children: JSX.Element
}

export type UseLocalStorageTypes = {
   setItem: (key: string, value: string) => void
   getItem: (key: string) => string | null
   removeItem: (key: string) => void
}

const useLocalStorage = (): UseLocalStorageTypes => {
   const { localStorage } = window

   const prefix = '@XLR8'

   const setItem = (key: string, value: string) => {
      return localStorage.setItem(`${prefix}:${key}`, value)
   }

   const getItem = (key: string) => {
      return localStorage.getItem(`${prefix}:${key}`)
   }

   const removeItem = (key: string) => {
      return localStorage.removeItem(`${prefix}:${key}`)
   }

   return {
      setItem,
      getItem,
      removeItem
   }
}

export default useLocalStorage

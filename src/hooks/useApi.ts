import api from 'services/api'
import images from 'db.json'

export const useApi = () => ({
   requestImages: async () => {
      try {
         const request = await api.get('/images')
         return request.data
      } catch (error) {
         console.error(
            `The request failed >>> ${error}. You are now consuming data from a local JSON file.`
         )
         return images
      }
   }
})

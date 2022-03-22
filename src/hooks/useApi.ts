import api from 'services/api'

export const useApi = () => ({
   requestImages: async () => {
      try {
         const request = await api.get('/images')
         return request.data
      } catch (error) {
         alert(error)
         return null
      }
   }
})

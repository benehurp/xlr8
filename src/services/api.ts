import axios from 'axios'

if (!process.env.REACT_APP_BASE_URL_API) {
   throw new Error('DEV Alert: You must inform API Base URL in .env file')
}

const api = axios.create({
   baseURL: process.env.REACT_APP_BASE_URL_API
})

export default api

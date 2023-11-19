import axios from "axios"

const apiUrl=axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params: {
    key:import.meta.env.VITE_API_KEY
  }
})

export default apiUrl
import axios from 'axios'

const baseURL = process.env.VERCEL_ENV! == 'production' ? 
  `https://${process.env.VERCEL_URL}`:`http://localhost:3000`

export const axiosClient = axios.create({
    baseURL:baseURL
}) 
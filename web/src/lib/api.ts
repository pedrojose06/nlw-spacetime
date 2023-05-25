import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://10.10.10.34:3333',
})

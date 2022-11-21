import axios from 'axios'
import getSolicitation from './trips/solicitation'

const api = axios.create({
  baseURL: 'http://localhost:8080/'
})

export { api, getSolicitation }

import axios from 'axios'
import getSolicitation from './trips/solicitation'
import userList from './user'

const apiMock = axios.create({
  baseURL: 'http://localhost:8080/'
})

const apiMoov = axios.create({
  baseURL: 'https://moov.audax.mobi/api'
})
export { apiMock, apiMoov, getSolicitation, userList }

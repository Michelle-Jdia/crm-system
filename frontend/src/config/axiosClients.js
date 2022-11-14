import axios from 'axios'

const axiosClients = axios.create({
    baseURL: 'http://localhost:5000'
})

export default axiosClients
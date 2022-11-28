import axios from 'axios'

const axiosClients = axios.create({
    baseURL: 'http://localhost:5000'
})

// @todo no default export allowed.
// eg: export const axiosClient
 
export default axiosClients
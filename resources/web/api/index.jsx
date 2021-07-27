import axios from 'axios'


const Api = axios.create({
    baseURL: window.location.origin+'/api'
})


export default Api
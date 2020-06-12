import axios from 'axios'

const baseURL = 'http://998a027f68ac.ngrok.io/'

export default axios.create({
    baseURL
})
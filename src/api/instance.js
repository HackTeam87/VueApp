import axios from 'axios'



const instance = axios.create({
    baseURL: 'https://mag.golden.net.ua/api',
    headers: {
        accept: "application/json"
    }
})

export default instance
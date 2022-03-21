// axios
import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:8081/api/',
    timeout: 30000,
    headers: { 'content-type': 'application/json' }
})

export default {
    get(url, params = {}, headers = {}) {
        return new Promise((resolve, reject) => {
        // console.log('http', http, params, headers, resolve, reject)
            http.get(url, {
                params: params,
                headers: headers
            }).then(res => {
                // deal success
                console.log('success', res)
                resolve(res.data)
            }).catch(err => {
                // deal error
                console.log('error', err)
                reject(err)
            })
        })
    },
}

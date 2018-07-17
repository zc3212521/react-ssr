import axios from 'axios'

console.log(6666)

axios.post('/api/data', {
    name: 'zhangsan'
}).then((res) => {
    console.log('res',res)
})

axios.get('/api/info').then((response) => {
    console.log("get res---", response.data)
})
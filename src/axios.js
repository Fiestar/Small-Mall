import axios from 'axios'

export function request(config){
  const request = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/v1/',
    timeout: 5000
  })
  
  //请求拦截
  request.interceptors.request.use(config => {
    return config;
  },err => {
    console.log(err)
  })
  //响应拦截
  request.interceptors.response.use(res => {
    return res.data
  },error => {
    console.log(error)
  })

  return request(config)
}
import {request} from '../axios'

export function getHomeData(){
  return request({
    url: 'home/multidata',
  })
}

export function getProData(type,page){
  return request({
    url: 'home/data',
    params:{type,page}
  })
}
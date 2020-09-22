import {request} from './request'
export function getBanner(){
    return request({
        url: '/home'
    })
}

export function getHomeGoods(type,page){
    return request({
        url: '/goods',
        params: {
            type,
            page
        }
    })
}
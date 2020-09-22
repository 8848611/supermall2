import {request} from './request'

export function getDetailInfo(id){
    return request({
        url: '/detail',
        params: {
            id
        }
    })
}
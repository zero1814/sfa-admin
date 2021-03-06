import request from '@/utils/request'

export function getData(data) {
    return request({
        url: '/member/page',
        method: 'post',
        data
    })
}

export function getInfo(val) {
    return request({
        url: '/member/page',
        method: 'get',
        params: { id: val }
    })
}
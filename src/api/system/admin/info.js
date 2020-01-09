import request from '@/utils/request'

export function getData(data) {
    return request({
        url: '/system/admin/page',
        method: 'post',
        data
    })
}

export function getInfo(val) {
    return request({
        url: '/system/admin/info',
        method: 'get',
        params: { id: val }
    })
}
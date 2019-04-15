import request from '@/utils/request'

export let additem = params => {
    return request.post('169.254.12.55:7001/exam/questions', params);
}
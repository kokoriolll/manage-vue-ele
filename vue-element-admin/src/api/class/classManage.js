import request from '@/utils/request'

export let upDateClass = () => {
    return request.get('/manger/grade');
}

export let addClass = params => {
    console.log(params,'params..')
    return request.post('/manger/grade', params);
}
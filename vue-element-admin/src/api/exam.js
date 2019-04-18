import request from '@/utils/request'
//添加试题接口
export let additem = params => {
    return request.post('/exam/questions', params);
}
//获取考试类型
export let getitem = params => {
    return request.get('/exam/examType', params);
}
//获取所有课程
export let subject = params => {
    return request.get('/exam/subject', params);
}
//获取试题类型
export let getQuestionsType = params => {
    return request.get('/exam/getQuestionsType', params);
}
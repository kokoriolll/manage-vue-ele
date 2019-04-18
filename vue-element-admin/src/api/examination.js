import request from '@/utils/request'

//获取类型
export let ClassType = () => {
  return request.get('/exam/examType');
}

//获取课程
export let Subject = () => {
  return request.get('/exam/subject');
}

//创建试卷
export let CreateExam = params => {
  return request.post('/exam/new', params);
}

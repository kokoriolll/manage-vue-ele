
import {upDateStudent,upDateNewStudent,deleteStudent} from '@/api/class/student.js'

const state = {
  studentData:[],
  pageNum:20,
  currentPage:1
}

const mutations={
    updateState(state,payload){
        for(let key in payload){
            state[key] = payload[key];
        }
   },
   //分页器数据,搜索
   pageData(state,payload){
     state.studentData = payload
   },
   //获取页数，当前页
   updatePage(state,payload){0
      state.pageNum = payload.pageSize
      state.currentPage = payload.currentPage
   }

}

const actions = {
    //所有学生列表
    async curUpDateStudent({commit,state},payload){ 
        //所有学生列表
        let res = await upDateStudent()
        //获取所有未分配班级的学生
        let nores = await upDateNewStudent()
        if(res.code == 1 || nores.code == 1){
          commit('updateState',{studentData:[...res.data,...nores.data]})
        }
        
        return state.studentData;
    },
//    //添加教室
//    async curAddRoom({commit},payload){ 
//     let res = await addRoom(payload)
//     if(res.room_id){
//       //更新教室
//       await updateRooms({
//         room_text:payload.room_text,
//         room_id:res.room_id
//     })
//     }else{
//       console.log('班级重复')
//     }
//  },
  //删除
  async curDeleteStudent({commit},payload){
    await deleteStudent(payload)
  }
}
export default {
    namespaced:true,
    state,
    actions,
    mutations
}

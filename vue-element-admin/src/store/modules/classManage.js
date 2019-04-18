import {addClass,upDateNewClass,upDateClass,getAllRoom,getAllSubject,updateClasses,deleteClass} from '@/api/class/classManage.js'

const state = {
    classData:[],
    allRoom:[],
    allSubject:[],
    dialogFormVisible:false,
    editData:{},
    type:'',
    disable:false
}

const mutations={
   updateState(state,payload){
        for(let key in payload){
            state[key] = payload[key];
        }
   },
   //dialog显示隐藏
   dialogForm(state,payload){
       state.type = payload.type
       state.disable = payload.disable
       state.dialogFormVisible = payload.dialogFormVisible
   },
   //修改
   editClass(state,payload){
      state.editData = payload
      console.log(payload,'payload')
   }
}

const actions = {
    //班级列表
    async curUpDateClass({commit},payload){ 
      //所有班级列表
      let res = await upDateClass()
      //所有未分配教室的班级
      let nores = await upDateNewClass()
      if(res.code == 1 || nores.code == 1){
        commit('updateState',{classData:[...res.data,...nores.data]})
      }
    },
    //添加班级
    async curAddClass({commit,state},payload){ 
        if(state.type == 'add'){
            let res = await addClass(payload)
            //更新班级
            await updateClasses({
                grade_id:res.grade_id,
                grade_name:payload.grade_name,
                room_id:payload.room_id,
                subject_id:payload.subject_id
            })
        }else if(state.type == 'edit'){
            console.log(payload,'type')
            //更新班级
            await updateClasses({
                grade_id:payload.grade_id,
                grade_name:payload.grade_name,
                room_id:payload.room_id,
                subject_id:payload.subject_id
            })
        }  
    },
    //删除班级
    async curDeleteClass({commit},payload){
        await deleteClass(payload)
    },
    //获取所有教室
    async getCurAllRoom({commit},payload){
        let res = await getAllRoom()
        if(res.code == 1){
            commit('updateState',{allRoom:res.data})
        }
    },
    //获取所有科目
    async getCurAllSubject({commit},payload){
        let res = await getAllSubject()
        if(res.code == 1){
            commit('updateState',{allSubject:res.data})
        }
    }
}
export default {
    namespaced:true,
    state,
    actions,
    mutations
}

<template>
    <div class="classMan">
        <p>学生管理</p>
        <div class="classContent">
            <div class="form">
                <el-form :model="form" ref="form" label-width="80px">
                  <el-input style="width:175px" v-model="form.name" placeholder="输入学生姓名"></el-input>
                  <el-select placeholder="请选择教室号" style="margin-left:10px" v-model="form.room" @change="getRoom">
                   <el-option v-for="(item,ind) in allRoom" :key="ind" :label="item.room_text" :value="item.room_text"></el-option>
                  </el-select>
                  <el-select placeholder="班级名" style="margin-left:10px" v-model="form.class" @change="getClass">
                      <el-option v-for="(item,ind) in classData" :key="ind" :label="item.grade_name" :value="item.grade_name"></el-option>
                  </el-select>
                  <el-button type="primary" @click="curSearch">搜索</el-button>
                  <el-button type="primary" @click="resetForm('form')">重置</el-button>
              </el-form>
            </div>
            <el-table
            :data="studentData"
            style="width: 100%">
            <el-table-column
                prop="student_name"
                label="姓名">
            </el-table-column>
            <el-table-column
                prop="student_id"
                label="学号">
            </el-table-column>
            <el-table-column
                prop="grade_name"
                label="班级">
            </el-table-column>
            <el-table-column
                prop="room_text"
                label="教室">
            </el-table-column>
            <el-table-column
                prop="student_pwd"
                label="密码">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="100" style="colo:#000">
            <template slot-scope="scope">
                <el-button type="text" size="small" style="color:#606266" @click="curDelete(scope.row)">删除</el-button>
            </template>
            </el-table-column>
            </el-table>
            <div class="block">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="pageSizes"
                :page-size="pageNum"
                layout=" prev, pager, next,sizes,jumper"
                :total="553"
                >
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex';
export default {
     data() {
        return {
            data:[],
            form: {
              name: '',
              room: '',
              class: ''
            },
            currentPages:1,
            pageSizes:[5, 10, 20, 50,100],
            pageSize:20,
        }
   },
   computed:{
     ...mapState({
       allRoom:state => state.classManage.allRoom,
       studentData:state => state.student.studentData,
       classData:state => state.classManage.classData,
       pageNum:state => state.student.pageNum,
       currentPage:state => state.student.currentPage
    })
   },
   mounted(){
    this.getPage()
    this.getCurAllRoom() 
    this.curUpDateClass() 
   },
  
   methods:{
     ...mapMutations({
       updatePage:'student/updatePage',
       updateState:'student/updateState',
       pageData:'student/pageData'
     }),
     ...mapActions({
      curUpDateStudent:'student/curUpDateStudent',
      getCurAllRoom:'classManage/getCurAllRoom',
      curDeleteStudent:'student/curDeleteStudent',
      curUpDateClass:'classManage/curUpDateClass'
     }),
     getRoom(e){
       this.form.room = e ;
     },
     getClass(e){
       this.form.class = e ;
     },
     curDelete(row){
      this.curDeleteStudent({
        student_id:row.student_id
      })
      this.getPage()
     },
     async curSearch(){
        if(!this.form.name && !this.form.room && !this.form.class){
           this.getPage()
        }else{
            let res = await this.curUpDateStudent()
            let newData = res.filter(val=>{
              return val.student_name == this.form.name || val.room_text == this.form.room || val.grade_name == this.form.class
            })
            if(newData){
              this.pageData(newData)
            }else{
              return;
            }
        }     
     },
     async getPage(){
        this.updatePage({
          pageSize:this.pageSize,
          currentPage:this.currentPages
        })
        let res = await this.curUpDateStudent()
        this.data = res.slice((this.currentPages-1) * this.pageSize,this.currentPages * this.pageSize)
        this.pageData(this.data)
     },
     handleSizeChange(val) {
      this.pageSize = val
      this.getPage()
     },
     handleCurrentChange(val) {
        this.currentPages = val
        this.getPage()
      },
      classValue(){
        this.form.name = '';
        this.form.room = '';
        this.form.class = '';
      },
      resetForm(formName) {
        this.$refs[formName].resetFields(); //移除校验结果并重置字段值
        this.classValue()
      }
   }
  }
</script>

<style lang="scss" scoped>
   .el-pagination{
       text-align: right;
       margin-top: 10px;
        button.btn-prev{
          border: 1px solid #CCC!important;
        }
    }
   .form{
       .el-button{
        width: 10%;
        height: 32px;
        background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
        margin-left:10px;
        }
    }
    
   .classContent{
       width:100%;
       height:auto;
       background:#FFF;
       border-radius: 10px;
       padding:20px;
       box-sizing:border-box;
       
   }
   .el-table header{
       color: #000;
       font-weight: 400;
       background: #F0F2F5!important;
       margin-top: 20px;
   }
</style>
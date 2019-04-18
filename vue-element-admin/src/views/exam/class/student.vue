<template>
    <div class="classMan">
        <p>学生管理</p>
        <div class="classContent">
            <div class="form">
                <el-form ref="form" :model="form" label-width="80px">
                <el-input style="width:175px" v-model="form.name" placeholder="输入学生姓名"></el-input>
                 <el-select placeholder="请选择教室号" style="margin-left:10px" v-model="form.region">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                <el-select placeholder="班级名" style="margin-left:10px" v-model="form.region">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                <el-button type="primary">搜索</el-button>
                <el-button type="primary">重置</el-button>
              </el-form>
            </div>
            <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="name"
                label="姓名">
            </el-table-column>
            <el-table-column
                prop="num"
                label="学号">
            </el-table-column>
            <el-table-column
                prop="class"
                label="班级">
            </el-table-column>
            <el-table-column
                prop="address"
                label="教室">
            </el-table-column>
            <el-table-column
                prop="address"
                label="密码">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="100" style="colo:#000">
            <template slot-scope="scope">
                <el-button type="text" size="small" style="color:#606266">删除</el-button>
            </template>
            </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
   export default {
     data() {
        return {
            form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
            },
          tableData: [{
            name:'马好好',
            num:'1732153120',
            class:'1609B',
            address: '13011'
          }, {
            name:'马好好',
            num:'1732153120',
            class:'1609B',
            address: '13011'
          }, {
            name:'马好好',
            num:'1732153120',
            class:'1609B',
            address: '13011'
          }, {
            name:'马好好',
            num:'1732153120',
            class:'1609B',
            address: '13011'
          },{
            name:'马好好',
            num:'1732153120',
            class:'1609B',
            address: '13011'
          },{
            name:'马好好',
            num:'1732153120',
            class:'1609B',
            address: '13011'
          },{
            name:'马好好',
            num:'1732153120',
            class:'1609B',
            address: '13011'
          }
          ]
        }
   }
   }
</script>

<style lang="scss" scoped>
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
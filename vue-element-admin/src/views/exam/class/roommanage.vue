<template>
    <div class="classMan">
        <p>教室管理</p>
        <div class="classContent">
            <el-button type="primary" @click="dialogFormVisible = true">+ 添加教室</el-button>
            <el-dialog title="添加班级" :visible.sync="dialogFormVisible">
            <el-form  :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item label="班级名:" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="班级名"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button class="submit" type="primary" @click="dialogFormVisible = false">提交</el-button>
            </div>
            </el-dialog>
            <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="address"
                label="教室号">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
             style="colo:#000">
            <template slot-scope="scope">
                <el-button type="text" size="small" style="color:#606266"  @click="centerDialogVisible = true">删除</el-button>
                <el-dialog
                :visible.sync="centerDialogVisible"
                style="z-index:9999;"
                >
                <b>?</b>
                <span>确定要删除此教室吗？</span>
                <span slot="footer" class="dialog-footer" style="margin-right:80px">
                    <el-button @click="centerDialogVisible = false">取 消</el-button>
                    <el-button class="submit" type="primary" @click="centerDialogVisible = false">确定</el-button>
                </span>
                </el-dialog>
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
         rules: {
          
          name: [
            { required: true}
          ]
         },
        tableData: [{
            address: '13011'
          }, {
            address: '13011'
          }, {
            address: '13011'
          }, {
            address: '13011'
          },{
            address: '13011'
          },{
            address: '13011'
          },{
            address: '13011'
          }
          ],
        dialogFormVisible: false,
        centerDialogVisible: false,
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        }
   },
   methods: {
      
    }
   }
</script>

<style lang="scss" scoped>
    .el-dialog__body{
       width: 100%;
       display: flex;
       flex-direction: column;
       align-items: center;
       b{
           width: 22px;
           height: 22px;
           border:2px solid orange;
           color: orange;
           line-height: 19px;
           text-align: center;
           border-radius: 50%;
           display: block;
           margin:0 auto;
       }
       span{
           display: inline-block;
           margin-left: 135px;
           margin-top: 20px;
       }
       
    }
    .dialog-footer{
        text-align: center;
        .submit{
             width: 112px;
             background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
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
   .el-table thead{
       color: #000;
       font-weight: 200;
   }
   .el-table{
       margin-top: 15px;
   }
  
</style>
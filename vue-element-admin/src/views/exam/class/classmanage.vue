<template>
    <div class="classMan">
        <p>班级管理</p>
        <div class="classContent">
            <el-button type="primary" @click="dialogVisible('add')">+ 添加班级</el-button>
            <el-dialog title="添加班级" :visible.sync="dialogFormVisible">
            <el-form  :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item label="班级名:" prop="class">
                    <el-input v-model="ruleForm.class" placeholder="班级名"></el-input>
                </el-form-item>
                <el-form-item label="教室号:" prop="classroom">
                    <el-select v-model="ruleForm.classroom" style="width:100%" placeholder="请选择教室名">
                    <el-option label="区域一" value="shanghai" style="width:100%"></el-option>
                    <el-option label="区域二" value="beijing" style="width:100%"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="课程号:" prop="classRegion">
                    <el-select v-model="ruleForm.classRegion" style="width:100%" placeholder="课程名">
                    <el-option label="区域一" value="shanghai" style="width:100%"></el-option>
                    <el-option label="区域二" value="beijing" style="width:100%"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button class="submit" type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </div>
            </el-dialog>
            <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
            prop="class"
            label="班级名">
            </el-table-column>
            <el-table-column
            prop="name"
            label="课程名">
            </el-table-column>
            <el-table-column
            prop="name"
            label="教室号">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            style="colo:#000">
            <template slot-scope="scope">
                <el-button type="text" size="small" style="color:#0139FD" @click="dialogVisible('edit')">修改</el-button>
                <el-button type="text" size="small" style="color:#0139FD">删除</el-button>
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
         ruleForm: {
          class: '',
          classroom: '',
          classRegion: '',
          delivery: false
        },
         rules: {
          class: [{ required: true, message: '请输入班级名', trigger: 'blur'}],
          classroom:[{ required: true, message: '请输入教室名', trigger: 'change'}],
          classRegion:[{ required: true, message: '请输入课程号', trigger: 'change'}]
         },
          dialogFormVisible: false,
          tableData: [{
            class: '1608A',
            name: '王小虎',
            address: '13011'
          }, {
            class: '1608A',
            name: '王小虎',
            address: '13011'
          }, {
            class: '1608A',
            name: '王小虎',
            address: '13011'
          }, {
            class: '1608A',
            name: '王小虎',
            address: '13011'
          },{
            class: '1608A',
            name: '王小虎',
            address: '13011'
          },{
            class: '1608A',
            name: '王小虎',
            address: '13011'
          },{
            class: '1608A',
            name: '王小虎',
            address: '13011'
          }
          ],

        formLabelWidth: '120px'
        }
   },
   watch:{
    
   },
   methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(valid)
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      dialogVisible(type){
       if(type == 'add'){
          this.dialogFormVisible = true
       }else if(type == 'edit'){
         this.dialogFormVisible = true
       }
      }
    }
   }
</script>

<style lang="scss" scoped>
    .dialog-footer{
        text-align: center;
        .submit{
             width: 20%;
             background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
        }
    }
   .el-dialog__header{
    color: rgba(0, 0, 0, 0.65);
    border-bottom: 1px solid #e8e8e8;
    .el-dialog__title{
      font-size: 16px;
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
   .el-table{
       margin-top: 15px;
      
   }
  .el-table thead{
       color: #000;
       font-weight: 200;
   }
</style>
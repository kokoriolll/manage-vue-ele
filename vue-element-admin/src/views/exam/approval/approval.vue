<template>
    <div class="classMan">
        <p>待批班级</p>
        <div class="classContent">
            <el-table
            :data="newData"
            style="width: 100%">
            <el-table-column
            prop="class"
            label="班级名">
            </el-table-column>
            <el-table-column
            prop="name"
            label="课程名称">
            </el-table-column>
            <el-table-column
            prop=""
            label="阅卷状态">
            </el-table-column>
            <el-table-column
            prop="name"
            label="课程名称">
            </el-table-column>
            <el-table-column
            prop="name"
            label="成材率">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            style="colo:#000">
            <template slot-scope="scope">
                <el-button type="text" size="small" style="color:#0139FD">批卷</el-button>
            </template>
            </el-table-column>
           </el-table>
           <div class="block">
                <el-pagination
                @size-change="handleSizeChange"
                :current-page="currentPage"
                :page-sizes="[5, 10, 20, 50,100]"
                :page-size="10"
                layout=" prev, pager, next,sizes,jumper"
                :total="1"
                >
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
   export default {
     data() {
        return {
          tableData:[{
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
          newData:[],
          currentPage:1
        }
   },
   created(){
     //console.log(this.tableData)
     this.newData = this.tableData.splice(0,10)
   },
   methods: {
      handleSizeChange(val) {
        this.newData = this.tableData.splice(0,val)
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
   
   .classContent{
       width:100%;
       height:auto;
       background:#FFF;
       border-radius: 10px;
       padding:20px;
       box-sizing:border-box;
       
   }
   .el-table{
       margin-top: 3%;
      
   }
  .el-table thead{
       color: #000;
       font-weight: 200;
   }
</style>
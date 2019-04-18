<template>
  <div>
    <el-button type="text" @click="open3" class="addbtn">+ 添加类型</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="类型ID"></el-table-column>
      <el-table-column prop="name" label="类型名称"></el-table-column>
      <el-table-column prop="address" label="操作"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    open3() {
      this.$prompt("创建新类型", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        center: true,
        cancelButtonClass: "cancel",
        confirmButtonClass: "confirm"
      })
        .then(({ value }) => {})
        .catch(() => {});
    }
  }
};
</script>

<style lang="scss" scoped>
.addbtn {
  width: 158px;
  height: 40px;
  background: linear-gradient(-90deg, #4e75ff, #0139fd) !important;
  font-size: 14px;
  color: #fff;
  margin-bottom: 30px;
}

.el-message-box__message {
  font-size: 30px;
}

.el-message-box__input .el-input--medium .el-input__inner {
  border: 0 !important;
  border-bottom: 1px solid #ccc;
}

.confirm {
  padding: 0 40px !important;
  background: linear-gradient(-90deg, #4e75ff, #0139fd) !important;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-table__body tr.hover-row:hover {
  background: #212e3e !important;
}
</style>
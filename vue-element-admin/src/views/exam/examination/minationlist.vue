<template>
  <div class="minWraper">
    <div class="head">试卷列表</div>
    <div class="top">
      <div class="examType">
        <span>考试类型:</span>
        <el-select v-model="value" class="name">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>

      <div class="classType">
        <span>课程:</span>
        <el-select v-model="values" class="name">
          <el-option
            v-for="item in option"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>

      <div>
        <el-row>
          <el-button type="primary" class="search">搜索</el-button>
        </el-row>
      </div>
    </div>

    <div class="content">
      <div class="ctop">
        <h4>试卷列表</h4>
        <div>
          <el-button plain class="active">全部</el-button>
          <el-button plain class="active">进行中</el-button>
          <el-button plain class="active">已结束</el-button>
        </div>
      </div>

      <div class="center">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="试卷信息" width="180"></el-table-column>
          <el-table-column prop="name" label="班级" width="180"></el-table-column>
          <el-table-column prop="address" label="创建人" width="380"></el-table-column>
          <el-table-column prop="address" label="开始时间" width="380"></el-table-column>
          <el-table-column prop="address" label="结束时间"></el-table-column>
          <el-table-column prop="detail" label="操作" style="color:#409eff" width="100"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "周考一"
        },
        {
          value: "选项2",
          label: "周考二"
        },
        {
          value: "选项3",
          label: "周考三"
        },
        {
          value: "选项4",
          label: "月考"
        }
      ],
      value: "",
      values: "",
      option: [
        {
          value: "选项1",
          label: "JavaScript上"
        },
        {
          value: "选项2",
          label: "JavaScript下"
        },
        {
          value: "选项3",
          label: "模块开发"
        },
        {
          value: "选项4",
          label: "移动开发"
        },
        {
          value: "选项5",
          label: "node基础"
        },
        {
          value: "选项6",
          label: "组件化开发(vue)"
        },
        {
          value: "选项7",
          label: "渐进式开发(react)"
        },
        {
          value: "选项8",
          label: "项目实战"
        },
        {
          value: "选项9",
          label: "javaScript高级"
        },
        {
          value: "选项10",
          label: "node高级"
        }
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          detail: "详情"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          detail: "详情"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          detail: "详情"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          detail: "详情"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.minWraper {
  width: 100%;
  height: 800px;
  background: #eee;
}

.head {
  height: 80px;
  padding: 30px;
  box-sizing: border-box;
  font-size: 30px;
}

.top {
  height: 150px;
  background: #fff;
  border-radius: 15px;
  display: flex;
  .examType {
    margin-top: 28px;
    margin-left: 70px;
    span {
      margin: 0 15px;
    }
    .name {
      width: 280px;
    }
  }

  .classType {
    margin-top: 28px;
    margin-left: 100px;
    span {
      margin: 0 15px;
    }
    .name {
      width: 280px;
    }
  }

  .search {
    width: 150px;
    margin-top: 28px;
    margin-left: 50px;
  }
}

.content {
  background: rgb(255, 255, 255);
  padding: 24px;
  margin: 20px 0px 20px;
  border-radius: 10px;
  h4 {
    margin-top: 10px;
  }
  .ctop {
    display: flex;
    justify-content: space-between;
    .active {
      color: #409eff;
    }
  }
}
</style>
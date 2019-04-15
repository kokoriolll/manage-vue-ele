<template>
  <div class="minWraper">
    <div class="head">试卷列表</div>
    <div class="top">
      <div class="examType">
        <span>*选择考试类型:</span>
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
        <span>*选择课程:</span>
        <el-select v-model="values" class="name">
          <el-option
            v-for="item in option"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
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
    margin-left: 120px;
    span {
      margin: 0 15px;
    }
  }

  .classType {
    margin-top: 28px;
    margin-left: 150px;
    span {
      margin: 0 15px;
    }
  }
}
</style>
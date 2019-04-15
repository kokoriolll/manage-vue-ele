<template>
  <div class="examination">
    <div class="head">添加考试</div>
    <div class="Allbox">
      <div class="NameExamination">
        <p>*试卷名称:</p>
        <el-input placeholder="请输入内容" v-model="input10" clearable class="name"></el-input>
      </div>
      <div class="examType">
        <p>*选择考试类型:</p>
        <el-select v-model="value" placeholder="请选择" class="name">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>

      <div class="classType">
        <p>*选择课程:</p>
        <el-select v-model="values" placeholder="请选择" class="name">
          <el-option
            v-for="item in option"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>

      <div class="Number">
        <p>*设置数量:</p>
        <el-input-number
          class="name"
          v-model="num8"
          controls-position="right"
          @change="handleChange"
          :min="1"
          :max="10"
        ></el-input-number>
      </div>

      <div class="block">
        <div class="demonstration">考试时间:</div>
        <el-date-picker v-model="value1" type="datetime" placeholder="开始时间"></el-date-picker>
        <span>-</span>
        <el-date-picker v-model="value2" type="datetime" placeholder="结束时间" class="els"></el-date-picker>
      </div>

      <div class="btn">
        <el-row>
          <el-button type="primary">主要按钮</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input10: "",
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
      num8: 1,
      value1: "",
      value2: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.examination {
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

.Allbox {
  width: 96%;
  height: 650px;
  background: #fff;
  margin: 0 auto;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  .NameExamination {
    height: 100px;
    margin-top: 12px;
    p {
      margin-left: 40px;
    }
    .name {
      width: 150px;
      height: 50px;
      margin-left: 40px;
    }
  }
  .examType {
    height: 100px;
    margin-top: 2px;
    p {
      margin-left: 40px;
    }
    .name {
      width: 150px;
      height: 50px;
      margin-left: 40px;
    }
  }

  .classType {
    height: 100px;
    margin-top: 2px;
    p {
      margin-left: 40px;
    }
    .name {
      width: 150px;
      height: 50px;
      margin-left: 40px;
    }
  }

  .Number {
    height: 100px;
    margin-top: 2px;
    p {
      margin-left: 40px;
    }
    .name {
      width: 150px;
      height: 36px;
      margin-left: 40px;
    }
  }

  .block {
    height: 80px;
    margin-top: 12px;
    div {
      margin-left: 40px;
      margin-bottom: 15px;
    }
    .els {
      margin: 0;
      padding: 0;
    }
  }

  .btn{
    margin-top: 22px;
    margin-left: 40px;
  }
}
</style>
  
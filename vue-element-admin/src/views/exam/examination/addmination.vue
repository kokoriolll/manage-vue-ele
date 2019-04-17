<template>
  <div class="examination">
    <div class="head">添加考试</div>
    <!-- <div class="Allbox">
      <div class="NameExamination">
        <p>*试卷名称:</p>
        <input placeholder="请输入内容" @input="getValue" v-model="input10" class="name">
        <div class="explain" v-show="isShow">请选择试卷名称</div>
      </div>
      <div class="examType">
        <p>*选择考试类型:</p>
        <el-select @input="getValue1" v-model="value" placeholder="请选择" class="name">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <div class="explain" v-show="isShow1">请选择考试类型</div>
      </div>

      <div class="classType">
        <p>*选择课程:</p>
        <el-select @input="getValue2" v-model="values" placeholder="请选择" class="name">
          <el-option
            v-for="item in option"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <div class="explain" v-show="isShow2">请选择课程</div>
      </div>

      <div class="Number">
        <p>*设置数量:</p>
        <el-input-number
          class="name"
          @input="getValue3"
          v-model="NumValue"
          controls-position="right"
          :min="1"
          :max="10"
        ></el-input-number>
        <div class="explain" v-show="isShow3">请设置数量</div>
      </div>

      <div class="block">
        <div class="demonstration">考试时间:</div>
        <div class="time">
          <div>
            <el-date-picker @input="getValue4" v-model="value1" type="datetime" placeholder="开始时间"></el-date-picker>
            <div class="explain" v-show="isShow4">请选择考试开始时间</div>
          </div>
          <span>-</span>
          <div>
            <el-date-picker
              @input="getValue5"
              v-model="value2"
              type="datetime"
              placeholder="结束时间"
              class="els"
            ></el-date-picker>
            <div class="explain" v-show="isShow5">请选择考试结束时间</div>
          </div>
        </div>
      </div>

      <div class="btn">
        <el-row>
          <el-button type="primary" @click="handleBtn">创建试卷</el-button>
        </el-row>
      </div>
    </div> -->
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
      NumValue: "",
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
      value1: "",
      value2: "",
      isShow: false,
      isShow1: false,
      isShow2: false,
      isShow3: false,
      isShow4: false,
      isShow5: false,
      inpVal: "",
      inpVal1: "",
      inpVal2: "",
      inpVal3: "",
      inpVal4: "",
      inpVal5: ""
    };
  },
  watch: {
    input10(e) {
      if (e) {
        this.isShow = false;
      }
    },
    value(e) {
      if (e) {
        this.isShow1 = false;
      }
    },
    values(e) {
      if (e) {
        this.isShow2 = false;
      }
    },
    NumValue(e) {
      if (e) {
        this.isShow3 = false;
      }
    },
    value1(e) {
      if (e) {
        this.isShow4 = false;
      }
    },
    value2(e) {
      if (e) {
        this.isShow5 = false;
      }
    }
  },
  methods: {
    getValue(e) {
      this.inpVal = e.target.value;
    },
    getValue1(e) {
      this.inpVal1 = e.target.value;
    },
    getValue2(e) {
      this.inpVal2 = e.target.value;
    },
    getValue3(e) {
      this.inpVal3 = e.target.value;
    },
    getValue4(e) {
      this.inpVal4 = e.target.value;
    },
    getValue5(e) {
      this.inpVal5 = e.target.value;
    },
    handleBtn(e) {
      if (
        this.inpVal == "" &&
        this.inpVal1 == "" &&
        this.inpVal2 == "" &&
        this.inpVal3 == "" &&
        this.inpVal4 == "" &&
        this.inpVal5 == ""
      ) {
        this.isShow = true;
        this.isShow1 = true;
        this.isShow2 = true;
        this.isShow3 = true;
        this.isShow4 = true;
        this.isShow5 = true;
      } else {
        this.isShow = false;
        this.isShow1 = false;
        this.isShow2 = false;
        this.isShow3 = false;
        this.isShow4 = false;
        this.isShow5 = false;
      }
    }
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
  height: 700px;
  background: #fff;
  margin: 0 auto;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  .NameExamination {
    height: 120px;
    margin-top: 12px;
    p {
      margin-left: 40px;
    }
    .name {
      width: 450px;
      height: 40px;
      margin-left: 40px;
      border-radius: 10px;
      border: solid 1px #ccc;
      padding: 0 15px;
      outline: none;
    }
    .explain {
      margin-left: 40px;
      color: red;
      transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
      margin-top: 2px;
    }
  }
  .examType {
    height: 120px;
    margin-top: 2px;
    p {
      margin-left: 40px;
    }
    .name {
      width: 150px;
      height: 50px;
      margin-left: 40px;
    }
    .explain {
      margin-left: 40px;
      color: red;
      transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
      margin-top: -8px;
    }
  }

  .classType {
    height: 120px;
    margin-top: 2px;
    p {
      margin-left: 40px;
    }
    .name {
      width: 150px;
      height: 50px;
      margin-left: 40px;
    }
    .explain {
      margin-left: 40px;
      color: red;
      transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
      margin-top: -8px;
    }
  }

  .Number {
    height: 120px;
    margin-top: 2px;
    p {
      margin-left: 40px;
    }
    .name {
      width: 150px;
      height: 36px;
      margin-left: 40px;
    }
    .explain {
      margin-left: 40px;
      color: red;
      transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  }

  .block {
    height: 80px;
    margin-top: 12px;
    div {
      margin-left: 40px;
      margin-bottom: 15px;
    }
    span {
      margin-top: 8px;
      margin-left: 10px;
    }
    .els {
      margin: 0;
      padding: 0;
      margin-left: -30px;
    }

    .time {
      display: flex;
      margin: 0;
      margin-left: -38px;
      div:first-child {
        .explain {
          margin-left: 40px;
          color: red;
          transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
          margin-top: -8px;
        }
      }
      div:last-child {
        .explain {
          margin-left: -30px;
          margin-top: 7px;
          color: red;
          transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
      }
    }
  }

  .btn {
    margin-top: 22px;
    margin-left: 40px;
  }
}
</style>
  
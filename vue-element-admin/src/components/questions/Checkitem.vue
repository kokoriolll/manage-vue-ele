<template>
  <div>
    <div class="header">
            <ul class="name_list">
                <span>课程类型:</span>
                <li>All</li>
                <li>javaScript上</li>
                <li>javaScript下</li>
                <li>模块化开发</li>
                <li>移动端开发</li>
                <li>node基础</li>
                <li>组件化开发(vue)</li>
                <li>渐进式开发(react)</li>
                <li>项目实战</li>
                <li>javaScript高级</li>
                <li>node高级</li>
            </ul>
            <ul class="select">
                <li>
                    <span>考试类型:</span>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </li>
                <li class="styles">
                    <span>题目类型:</span>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </li>
                <li class="styles">
                    <el-button type="text" class="addbtn">查询</el-button>
                </li>
            </ul>
        </div>
        <div class="content">
            <div class="content_list">
                <div class="con_list_left">
                    <span class="robot">机器人归位</span>
                    <div class="tab_list">
                        <span>代码补全</span>
                        <span>javaScript上</span>
                        <span>周考1</span>
                    </div>
                    <p class="name_issue">dingshaoshan发布</p>
                </div>
                <div class="con_list_right">
                    <router-link to="/Additem/add" tag="p">
                        <span>编辑</span>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="con_list_right">
          <span>编辑</span>
        </div>
      <div class="content_list">
        <div class="con_list_left">
          <span class="robot">机器人归位</span>
          <div class="tab_list">
            <span>代码补全</span>
            <span>javaScript上</span>
            <span>周考1</span>
          </div>
          <p class="name_issue">dingshaoshan发布</p>
        </div>
        <div class="con_list_right">
          <span>编辑</span>
        </div>
      </div>
      <div class="content_list">
        <div class="con_list_left">
          <span class="robot">机器人归位</span>
          <div class="tab_list">
            <span>代码补全</span>
            <span>javaScript上</span>
            <span>周考1</span>
          </div>
          <p class="name_issue">dingshaoshan发布</p>
        </div>
        <div class="con_list_right">
          <span>编辑</span>
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
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
* {
  list-style: none;
}

.header {
  width: 100%;
  border-radius: 20px;
  background: #fff;
  padding: 30px 30px 30px 30px;
}

.name_list {
  display: flex;
  height: 20px;
  li {
    padding: 0 6px 0 6px;
    font-size: 12px;
    line-height: 20px;
  }

  li:hover {
    color: #7b91e2;
  }

  span {
    font-size: 14px;
    line-height: 18px;
  }
}

.select {
  margin-top: 40px;
  display: flex;

  .styles {
    margin-left: 40px;
  }
  li {
    span {
      font-size: 14px;
    }
  }
}

.addbtn {
  padding: 10px 40px 10px 40px;
  background: linear-gradient(-90deg, #4e75ff, #0139fd) !important;
  font-size: 14px;
  color: #fff;
}

.content {
  .con_list_left {
    font-size: 14px;

    .robot {
      color: #5959af;
    }

    .tab_list {
      margin-top: 20px;
    }

    .tab_list span:nth-child(1) {
      padding: 5px;
      border: 1px solid #91d5ff;
      background: #e6f7ff;
      color: #91d5ff;
    }

    .tab_list span:nth-child(2) {
      padding: 5px;
      border: 1px solid #adc6ff;
      background: #f0f5ff;
      color: #adc6ff;
    }

    .tab_list span:nth-child(3) {
      padding: 5px;
      border: 1px solid #ffd591;
      background: #fff7e6;
      color: #ffd591;
    }
  }

  .name_issue {
    color: #8439fd;
    margin-top: 20px;
  }

  .con_list_right {
    display: flex;
    align-items: center;
    color: #0139fd;
  }
}

.content_list {
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding-top: 15px;
  padding-bottom: 10px;
}

.content_list:hover {
  background: #f7f8ff;
}
</style>
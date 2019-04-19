<template>
  <div class="newExam">
    <div class="head">创建试卷</div>
    <div class="bigBox">
      <el-row class="add">
        <el-button>添加新题</el-button>
      </el-row>
      <div class="style_exam">
        <h2>ss</h2>
        <p class="top">考试时间：1小时30分钟 监考人：刘于 开始考试时间：2018.9.10 10:00 阅卷人：刘于</p>
        <div class="style_questionitem">
          <div class="style_questionitem__3ETlC">
            <h4>
              "1"
              <a href="javascript:;">删除</a>
            </h4>
            <div class="react-markdown">
              <p>在二维平面上，有一个机器人从原点 (0, 0) 开始，给出它的移动顺序，判断这个机器人在完成移动后是否在 (0, 0) 处结束。</p>
              <p>移动顺序由字符串表示。机器人的有效动作有 R（右），L（左），U（上）和 D（下）。如果机器人在完成所有动作后返回原点，则返回 true。否则，返回 false。</p>
              <p>示例 1:</p>
               <pre>
                  <code>
                    输入: "UD"
                    输出: true
                    解释：机器人向上移动一次，然后向下移动一次。所有动作都具有相同的幅度，因此它最终回到它开始的原点。因此，我们返回 true。
                  </code>
              </pre>
              <p>示例 2:</p>
              <pre>
                  <code>
                    输入: "LL"
                    输出: false
                    解释：机器人向左移动两次。它最终位于原点的左侧，距原点有两次 “移动” 的距离。我们返回 false，因为它在移动结束时没有返回原点。
                  </code>
              </pre>
              <p>注意：机器人“面朝”的方向无关紧要。 “R” 将始终使机器人向右移动一次，“L” 将始终向左移动等。此外，假设每次移动机器人的移动幅度相同。</p>
              <p>请根据题意在横线处填写合适的代码：</p>
              <p>
                function check(str){
                    var U = 0, D = 0, L = 0, R = 0;
                    for(var i=0; i  str.length; i++){
                switch (str
              </p>
            </div>
          </div>
        </div>
        <button>
          <span>创建试卷</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.examination {
  width: 100%;
  background: #eee;
}

.head {
  height: 80px;
  padding: 25px;
  box-sizing: border-box;
  font-size: 26px;
}

.bigBox {
  width: 96%;
  background: #fff;
  margin: 0 auto;
  border-radius: 15px;
  .add {
    padding: 20px;
  }
  .style_exam {
    min-height: 980px;
    margin: auto;
    padding: 80px;
    padding-top: 40px;
    text-align: center;
    position: relative;
    h2 {
      margin-top: 0;
      margin-bottom: 0.5em;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
    }
    .top {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
    .style_questionitem {
      border: solid 1px #ccc;
      padding: 0 20px;
      .style_questionitem__3ETlC {
        h4 {
          margin-block-start: 1.33em;
          margin-block-end: 1.33em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          display: flex;
          justify-content: space-between;
          a {
            color: #1890ff;
            background-color: initial;
            text-decoration: none;
            outline: none;
            cursor: pointer;
            transition: color 0.3s;
          }
        }
      }
    }
    button {
        margin-top: 20px;
        padding: 10px 40px!important;
        border-radius: 4px!important;
        border: 0!important;
        font-size: 14px!important;
        color: #fff!important;
        background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
        span{
            pointer-events: none;
            display: inline-block;
        }
    }
  }
}
</style>

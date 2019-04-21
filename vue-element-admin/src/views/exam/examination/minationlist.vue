<template>
  <div class="minWraper">
    <div class="head">试卷列表</div>
    <div class="top">
      <div class="examType">
        <span>考试类型:</span>
        <el-select v-model="classtypeValue" @change="handleChange" style="width:200px">
          <el-option
            v-for="item in ClassTypeState"
            :key="item.exam_id"
            :label="item.exam_name"
            :value="item.exam_id"
          ></el-option>
        </el-select>
      </div>

      <div class="classType">
        <span>课程:</span>
        <el-select v-model="subjectValue" @change="handleSub" style="width:200px">
          <el-option
            v-for="item in SubjectState"
            :key="item.subject_id"
            :label="item.subject_text"
            :value="item.subject_id"
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
        <el-table :data="AllExamState" style="width: 100%">
          <el-table-column prop="title" label="试卷信息" width="350"></el-table-column>
          <el-table-column :data="AllExamState.grade_name" prop="grade_name" label="班级" width="280"></el-table-column>
          <el-table-column prop="user_name" label="创建人" width="350"></el-table-column>
          <el-table-column prop="start_time" label="开始时间" width="350"></el-table-column>
          <el-table-column prop="end_time" label="结束时间"></el-table-column>
          <el-table-column label="操作" width="100">
            <el-button @click="handleDetail" type="text" size="small">详情</el-button>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      classtypeValue: "",
      subjectValue: "",
      examID:''
    };
  },
  computed: {
    ...mapState({
      ClassTypeState: state => {
        return state.examination.ClassTypeData;
      },
      SubjectState: state => {
        return state.examination.SubjectData;
      },
      AllExamState: state => {
        return state.examination.AllExamData;
      },
      DetailExamState: state => {
        return state.examination.DetailExamData;
      },
      CreateExamState: state => { //创建试卷
        return state.examination.CreateExamData;
      }
    })
  },
  methods: {
    ...mapMutations({
      ClassTypeSave: "examination/getClassType",
      SubjectSave: "examination/getSubject",
      AllExamSave: "examination/getAllExam",
      DetailExamSave: "examination/getDetailExam",
      CreateExamSave: "examination/getCreateExam"
    }),
    ...mapActions({
      CreateExam: "examination/CreateExam",
      ClassType: "examination/ClassType",
      Subject: "examination/Subject",
      AllExam: "examination/AllExam",
      DetailExam: "examination/DetailExam"
    }),
    handleChange(e) {
      this.ClassTypeID = e;
    },
    handleSub(e) {
      this.SubjectID = e;
    },
    handleDetail() {
      //获取exam_exam_id的ID
      this.examID = this.CreateExamState.exam_exam_id;
      console.log(this.examID)
      this.DetailExam({
        examID: this.examID
      });
      //this.$router.push({ path: "/examination/detail" });
    }
  },
  created() {
    this.ClassType();
    this.Subject();
    this.AllExam();
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
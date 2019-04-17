<template>
  <div class="wrap">
    <p>用户展示</p>
    <div class="nav">
      <span
        :class="idx===index?'blue':''"
        @click="change(index)"
        :data-val="index"
        v-for="(item,index) in nav"
        :key="index"
      >{{item}}</span>
    </div>
    <h2>{{tit}}</h2>
    <el-table :data="list" style="width: 100%">
      <el-table-column
        v-for="(item,index) in tabNav"
        :key="index"
        prop="date"
        :label="item"
        :style="{width:'100%'/tabNav.length}"
      ></el-table-column>
      <!-- <el-table-column prop="name" label="姓名" width="190"></el-table-column>
      <el-table-column prop="address" label="地址" width="190"></el-table-column>
      <el-table-column prop="address" label="地址" width="190"></el-table-column>
      <el-table-column prop="address" label="地址" width="190"></el-table-column>
      <el-table-column prop="address" label="地址" width="190"></el-table-column>
      <el-table-column prop="address" label="地址" width="190"></el-table-column>-->
    </el-table>
    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      nav: [
        "用户数据",
        "身份数据",
        "api接口权限",
        "身份和api接口关系",
        "视图接口权限",
        "身份和视图权限关系"
      ],
      tabNav: ["用户名", "密码", "身份"],
      list: [
        { date: 2018, name: "张三", address: "123" },
        { date: 2019, name: "张四", address: "123" },
        { date: 2010, name: "张五", address: "123" }
      ],
      idx: 0,
      tit: "用户数据",
      total: 100
    };
  },
  computed: {
    ...mapState({})
  },
  created() {
    this.setUserData();
  },
  methods: {
    ...mapActions({
      setUserData: "userShow/setUserData",
      setidentity: "userShow/setidentity",
      setApiAuthority: "userShow/setApiAuthority",
      setIdentityApiAuthorityRelation:"userShow/setIdentityApiAuthorityRelation",
      setViewAuthority: "userShow/setViewAuthority",
      setidentityViewAuthorityRelation:"userShow/setidentityViewAuthorityRelation"
    }),

    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    change(idx) {
      this.idx = idx;
      this.tit = this.nav[idx];
      if (idx === 0) {
        this.tabNav = ["用户名", "密码", "身份"];
        //展示用户数据
        this.setUserData();
      } else if (idx === 1) {
        this.tabNav = ["身份名称"];
        //展示身份数据
        this.setidentity();
      } else if (idx === 2) {
        this.tabNav = ["api权限名称", "api权限接口", "api权限方法"];
        //展示api接口权限
        this.setApiAuthority();
      } else if (idx === 3) {
        this.tabNav = ["身份名称", "api权限名称", "api权限url", "api权限方法"];
        //展示身份和api接口关系
        this.setIdentityApiAuthorityRelation();
      } else if (idx === 4) {
        this.tabNav = ["视图权限名称", "视图id"];
        //展示视图接口权限
        this.setViewAuthority();
      } else if (idx === 5) {
        this.tabNav = ["身份", "视图名称", "视图id"];
        //展示身份和视图权限关系
        this.setidentityViewAuthorityRelation();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
  width: 100%;
  > p {
    font-size: 22px;
    color: #333;
  }
  h2 {
    font-weight: 500;
  }
  .nav {
    span {
      font-size: 14px;
      border: 1px solid #ccc;
      color: #ccc;
      background: #fff;
      padding: 0 10px;

      cursor: pointer;
      display: inline-block;
      height: 30px;
      line-height: 30px;
    }
    span:hover {
      color: #0139fd;
    }
    .blue {
      border: 1px solid #0139fd;
      color: #0139fd;
    }
  }
  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
}
// .pagination .el-pagination .el-pager li.active{
//       border: 1px solid #0139fd!important;
//   // color: #0139fd!important;
//   // background: #fff!important;
// }
</style>
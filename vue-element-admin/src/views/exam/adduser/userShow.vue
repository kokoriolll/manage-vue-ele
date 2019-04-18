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
        v-for="(item,index) in tits[idx]"
        :key="index"
        :prop="item"
        :label="tabNav[idx][index]"
        :style="{width:'100%'/tabNav[idx].length}"
      ></el-table-column>
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
      tabNav: [
        ["用户名", "密码", "身份"],
        ["身份名称"],
        ["api权限名称", "api权限接口", "api权限方法"],
        ["身份名称", "api权限名称", "api权限url", "api权限方法"],
        ["视图权限名称", "视图id"],
        ["身份", "视图名称", "视图id"]
      ],
      tits: [
        ["user_name", "user_pwd", "identity_text"],
        ["identity_text"],
        ["api_authority_text", "api_authority_url", "api_authority_method"],
        [
          "identity_text",
          "api_authority_text",
          "api_authority_url",
          "api_authority_method"
        ],
        ["view_authority_text", "view_id"],
        ["identity_text", "view_authority_text", "view_id"]
      ],
      list: [],
      idx: 0,
      tit: "用户数据",
      total: 0,
      page: 1, //第几页
      pageSize: 10 ,//每页十条
      pageTit:['userData','identitysData','apiAuthoritysData','identityApiAuthorityRelationsData','viewAuthoritysData','identityViewAuthorityRelationsData']
    };
  },
  computed: {
    ...mapState({
      userData: state => state.userShow.userData,
      identitysData: state => state.userShow.identitysData,
      apiAuthoritysData: state => state.userShow.apiAuthoritysData,
      identityApiAuthorityRelationsData: state =>
        state.userShow.identityApiAuthorityRelationsData,
      viewAuthoritysData: state => state.userShow.viewAuthoritysData,
      identityViewAuthorityRelationsData: state =>
        state.userShow.identityViewAuthorityRelationsData
    })
  },
  created() {
    this.setUserData();
    this.list = this.userData;
    this.total = this.list.length;
    this.list = this.list.slice(this.page - 1, this.pageSize);
  },
  methods: {
    ...mapActions({
      setUserData: "userShow/setUserData",
      setidentity: "userShow/setidentity",
      setApiAuthority: "userShow/setApiAuthority",
      setIdentityApiAuthorityRelation:
        "userShow/setIdentityApiAuthorityRelation",
      setViewAuthority: "userShow/setViewAuthority",
      setidentityViewAuthorityRelation:
        "userShow/setidentityViewAuthorityRelation"
    }),
    //0 9     (1-1)*10,1*10
    //10 19   (2-1)*10,2*10
    //20 29   (3-1)*10,3*10
    //30 39   (4-1)*10,4*10
    //(this.page-1)*this.pageSize
    handleCurrentChange(val) {
      this.page = val;
      console.log(this[this.pageTit[this.idx]])

      console.log(`当前页: ${val}`);
    },
    change(idx) {
      this.idx = idx;
      this.tit = this.nav[idx];
      // this.page=1
      if (idx === 0) {
        //展示用户数据
        this.setUserData();
        this.list = this.userData;
        console.log((this.total = this.list.length));
        this.list = this.list.slice(this.page - 1, this.pageSize);
      } else if (idx === 1) {
        //展示身份数据
        this.setidentity();
        this.list = this.identitysData;
        console.log((this.total = this.list.length));
        this.list = this.list.slice(this.page - 1, this.pageSize);
      } else if (idx === 2) {
        //展示api接口权限
        this.setApiAuthority();
        this.list = this.apiAuthoritysData;
        console.log((this.total = this.list.length));
        this.list = this.list.slice(this.page - 1, this.pageSize);
      } else if (idx === 3) {
        //展示身份和api接口关系
        this.setIdentityApiAuthorityRelation();
        this.list = this.identityApiAuthorityRelationsData;
        console.log((this.total = this.list.length));
        this.list = this.list.slice(this.page - 1, this.pageSize);
      } else if (idx === 4) {
        //展示视图接口权限
        this.setViewAuthority();
        this.list = this.viewAuthoritysData;
        console.log((this.total = this.list.length));
        this.list = this.list.slice(this.page - 1, this.pageSize);
      } else if (idx === 5) {
        //展示身份和视图权限关系
        this.setidentityViewAuthorityRelation();
        this.list = this.identityViewAuthorityRelationsData;
        console.log((this.total = this.list.length));
        this.list = this.list.slice(this.page - 1, this.pageSize);
      }
      // this.total = this.list.length;
      // console.log(this.list.length);
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

.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
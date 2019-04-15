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
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="190"></el-table-column>
      <el-table-column prop="address" label="地址" width="190"></el-table-column>
      <el-table-column prop="address" label="地址" width="190"></el-table-column>
      <el-table-column prop="address" label="地址" width="190"></el-table-column>
      <el-table-column prop="address" label="地址" width="190"></el-table-column>
      <el-table-column prop="address" label="地址" width="190"></el-table-column>
    </el-table>
    <!-- <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="Date">
        <template slot-scope="scope">
          <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" label="Author">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" label="Importance">
        <template slot-scope="scope">
          <svg-icon v-for="n in +scope.row.importance" :key="n" icon-class="star" class="meta-item__icon" />
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="Status" width="110">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column min-width="300px" label="Title">
        <template slot-scope="{row}">
          <router-link :to="'/example/edit/'+row.id" class="link-type">
            <span>{{ row.title }}</span>
          </router-link>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Actions" width="120">
        <template slot-scope="scope">
          <router-link :to="'/example/edit/'+scope.row.id">
            <el-button type="primary" size="small" icon="el-icon-edit">
              Edit
            </el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>-->

    <!-- <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />-->
    <!-- <el-pagination
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>-->
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        background
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
      // list: null,
      list: [
        { date: 2018, name: "张三", address: "123" },
        { date: 2019, name: "张四", address: "123" },
        { date: 2010, name: "张五", address: "123" }
      ],
      currentPage4: 4,
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
      setIdentityApiAuthorityRelation:
        "userShow/setIdentityApiAuthorityRelation",
      setViewAuthority: "userShow/setViewAuthority",
      setidentityViewAuthorityRelation:
        "userShow/setidentityViewAuthorityRelation"
    }),

    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    change(idx) {
      this.idx = idx;
      this.tit = this.nav[idx];
      if (idx === 0) {
        //展示用户数据
        this.setUserData();
      } else if (idx === 1) {
        //展示身份数据
        this.setidentity();
      } else if (idx === 2) {
        //展示api接口权限
        this.setApiAuthority();
      } else if (idx === 3) {
        //展示身份和api接口关系
        this.setIdentityApiAuthorityRelation();
      } else if (idx === 4) {
        //展示视图接口权限
        this.setViewAuthority();
      } else if (idx === 5) {
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
      background: #fff;
      padding: 8px 10px;
      border: 1px solid #ccc;
      color: #ccc;
      cursor: pointer;
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
</style>
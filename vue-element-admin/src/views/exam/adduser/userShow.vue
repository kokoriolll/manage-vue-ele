<template>
  <div class="wrap">
    <p>用户展示</p>
    <div class="nav">
      <span v-for="(item,index) in nav" :key="index">{{item}}</span>
    </div>
<el-table :data="list" style="width: 100%">
<el-table-column prop="date" label="日期" width="180"></el-table-column>
<el-table-column prop="name" label="姓名" width="180"></el-table-column>
<el-table-column prop="address" label="地址" width="180"></el-table-column>
<el-table-column prop="address" label="地址" width="180"></el-table-column>
<el-table-column prop="address" label="地址" width="180"></el-table-column>
<el-table-column prop="address" label="地址" width="180"></el-table-column>
<el-table-column prop="address" label="地址" width="180"></el-table-column>
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

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
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
      list:[{date:2018,name:"张三",address:'123'},{date:2019,name:"张四",address:'123'},{date:2010,name:"张五",address:'123'},],
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20
      }
    };
  },
  computed: {
    ...mapState({})
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.listLoading = true;
      // fetchList(this.listQuery).then(response => {
      //   this.list = response.data.items
      //   this.total = response.data.total
      //   this.listLoading = false
      // })
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
  }
}
</style>
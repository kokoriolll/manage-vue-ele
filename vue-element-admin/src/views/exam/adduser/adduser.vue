<template>
  <div class="wrap">
    <p>添加用户</p>
    <div class="box">
      <div class="user">
        <p>
          <span :id="idx===0?'blue':'gray'" @click="change(0)">添加用户</span>
          <span :id="idx===1?'blue':'gray'" @click="change(1)" class="updataTit">更新用户</span>
        </p>
        <div v-if="idx===0">
          <el-input v-model="userName" placeholder="请输入用户名"></el-input>
          <el-input v-model="pwd" placeholder="请输入密码" show-password></el-input>
          <el-select v-model="identityId" placeholder="请选择身份id">
            <el-option
              v-for="item in identityIdValue"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </div>
        <div v-if="idx===1">
          <el-select v-model="userId" placeholder="请选择用户id">
            <el-option
              v-for="item in userIdValue"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
          <el-input v-model="userName" placeholder="请输入用户名"></el-input>
          <el-input v-model="pwd" placeholder="请输入密码" show-password></el-input>
          <el-select v-model="identityId" placeholder="请选择身份id">
            <el-option
              v-for="item in identityIdValue"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </div>

        <div class="btn">
          <el-button type="primary" @click="user">确定</el-button>
          <el-button plain @click="reset(1)">重置</el-button>
        </div>
      </div>
      <div class="user">
        <p>
          <span>添加身份</span>
        </p>
        <el-input v-model="identityName" placeholder="请输入身份名称"></el-input>
        <div class="btn">
          <el-button type="primary" @click="identity">确定</el-button>
          <el-button plain @click="reset(2)">重置</el-button>
        </div>
      </div>
      <div class="user">
        <p>
          <span>添加api接口权限</span>
        </p>
        <el-input v-model="apiJurisdictionName" placeholder="请输入api接口权限名称"></el-input>
        <el-input v-model="apiJurisdictionUrl" placeholder="请输入api接口权限url"></el-input>
        <el-input v-model="apiJurisdictionMethod" placeholder="请输入api接口权限方法"></el-input>
        <div class="btn">
          <el-button type="primary" @click="jurisdiction">确定</el-button>
          <el-button plain @click="reset(3)">重置</el-button>
        </div>
      </div>
      <div class="user">
        <p>
          <span>添加视图接口权限</span>
        </p>
        <el-select v-model="existingView" placeholder="请选择已有视图">
          <el-option
            v-for="item in existingViewValue"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          ></el-option>
        </el-select>
        <div class="btn">
          <el-button type="primary" @click="view">确定</el-button>
          <el-button plain @click="reset(4)">重置</el-button>
        </div>
      </div>

      <div class="user">
        <p>
          <span>给身份设置api接口权限</span>
        </p>
        <div>
          <el-select v-model="identityId" placeholder="请选择身份id">
            <el-option
              v-for="item in identityIdValue"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </div>
        <div>
          <el-select v-model="apiJurisdictionId" placeholder="请选择api接口权限id">
            <el-option
              v-for="item in apiJurisdictionIdValue"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </div>
        <div class="btn">
          <el-button type="primary" @click="api">确定</el-button>
          <el-button plain @click="reset(5)">重置</el-button>
        </div>
      </div>
      <div class="user">
        <p>
          <span>给身份设置视图权限</span>
        </p>
        <div>
          <el-select v-model="identityId" placeholder="请选择身份id">
            <el-option
              v-for="item in identityIdValue"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </div>
        <div>
          <el-select v-model="viewJurisdictionId" placeholder="请选择视图权限id">
            <el-option
              v-for="item in viewJurisdictionIdValue"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </div>
        <div class="btn">
          <el-button type="primary" @click="set">确定</el-button>
          <el-button plain @click="reset(6)">重置</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      userId: "",
      userName: "",
      pwd: "",
      identityId: "",
      identityName: "",
      apiJurisdictionName: "",
      apiJurisdictionUrl: "",
      apiJurisdictionMethod: "",
      existingView: "",
      apiJurisdictionId: "",
      viewJurisdictionId: "",
      idx: 0,
      identityIdValue: [
        {
          value: "选项1",
          label: "黄金糕"
        }
      ]
    };
  },
  computed: {
    ...mapState({})
  },
  methods: {
    ...mapActions({
      setAddUsers: "userManagement/setAddUsers",
      setUpdataUserInfo: "userManagement/setUpdataUserInfo",
      setAddIdentity: "userManagement/setAddIdentity",
      setAddAuthorityApi: "userManagement/setAddAuthorityApi",
      setAddAuthorityView: "userManagement/setAddAuthorityView",
      setIdentityApi: "userManagement/setIdentityApi",
      setIdentityView: "userManagement/setIdentityView"
    }),
    ...mapMutations({}),
    //tab切换
    change(idx) {
      this.idx = idx;
      console.log(this.idx);
    },
    //重置
    reset(idx) {
      if (idx === 1) {
        this.userId = "";
        this.userName = "";
        this.pwd = "";
        this.identityId = "";
      } else if (idx === 2) {
        this.identityName = "";
      } else if (idx === 3) {
        this.apiJurisdictionName = "";
        this.apiJurisdictionUrl = "";
        this.apiJurisdictionMethod = "";
      } else if (idx === 4) {
        this.existingView = "";
      } else if (idx === 5) {
        this.identityId = "";
        this.apiJurisdictionId = "";
      } else if (idx === 6) {
        this.identityId = "";
        this.viewJurisdictionId = "";
      }
    },
    //用户
    async user() {
      console.log(this.userName, this.pwd, this.identityId);
      if (this.idx === 0) {
        await this.setAddUsers({
          user_name: this.userName,
          user_pwd: this.pwd,
          identity_id: this.identityId
        });
      } else {
        await this.setUpdataUserInfo({
          user_id: this.userId2,
          user_name: this.userName,
          user_pwd: this.pwd,
          identity_id: this.identityId
        });
      }
    },
    //身份
    async identity() {
      await this.setAddIdentity({
        identity_text: this.identityName
      });
    },
    //api接口权限
    async jurisdiction() {
      await this.setAddAuthorityApi({
        api_authority_text: this.apiJurisdictionName,
        api_authority_url: this.apiJurisdictionUrl,
        api_authority_mehtod: this.apiJurisdictionMethod
      });
    },
    //视图接口权限
    async view() {
      await this.setAddAuthorityView({
        view_authority_text: this.existingView
        // view_id: this. 视图id 字符串
      });
    },
    // 给身份设置api接口权限
    async api() {
      await this.setIdentityApi({
        identity_id: this.identityId,
        api_authority_id: this.apiJurisdictionId
      });
    },
    //给身份设定视图权限
    async set() {
      await this.setIdentityView({
        identity_id: this.identityId,
        view_id: this.viewJurisdictionId
      });
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
.box {
  display: flex;
  flex-wrap: wrap;

  .user {
    min-height: 260px;
    width: 440px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    padding: 0 10px;
    .btn {
      margin: 8px 0;
    }
    span {
      font-size: 14px;
      background: #fff;
      padding: 8px 10px;
      border: 1px solid #0139fd;
      color: #0139fd;
      cursor: pointer;
    }
    .updataTit {
      border: 1px solid #ccc;
      color: #ccc;
      margin-left: -1px;
    }
    #blue {
      border: 1px solid #0139fd;
      color: #0139fd;
    }
    #gray {
      border: 1px solid #ccc;
      color: #ccc;
    }
  }
}
// .user
// .user
.el-select {
  margin: 8px 0;
  width: 180px;
}
.el-button--primary {
  width: 120px;
}
.el-input {
  margin: 8px 0;
}
</style>
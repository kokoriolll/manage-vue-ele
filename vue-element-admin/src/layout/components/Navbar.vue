<template>
  <div class="navbar">
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <div class="right-menu">
      <el-dropdown class="avatar-container right-menu-item">
        <div class="avatar-wrapper">
<<<<<<< HEAD
          <img style="width:40px;height:40px;border-radius:50%"  :src="userInfo.avatar" class="user-avatar">
          <i class="el-icon-caret-bottom" trigger="click" />
          <image-cropper
            v-show="imagecropperShow"
            :key="imagecropperKey"
            :width="300"
            :height="300"
            url="http://123.206.55.50:11000/upload"
            lang-type="en"
            @close="close"
            @crop-upload-success="cropSuccess"
            />
=======
          <!-- <img :src="userInfo.avatar'" class="user-avatar"> -->
          <pan-thumb :image="userInfo.avatar" />
          <i class="el-icon-caret-bottom" />
>>>>>>> 6c26d17625d74b8c8c38132ebdc4f603fadef647
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              {{ $t('navbar.dashboard') }}
            </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
            <el-dropdown-item>
              {{ $t('navbar.github') }}
            </el-dropdown-item>
          </a>
          <el-dropdown-item>
            <span @click="imagecropperShow=true">上传头像</span>
            
          </el-dropdown-item>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">{{ $t('navbar.logOut') }}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button type="primary" icon="upload" style="position: absolute;bottom:0px;z-index: 999;width: 60px;height: 60px;border-radius: 50%;opacity: 0;" @click="imagecropperShow=true" />
  
      <image-cropper
        v-show="imagecropperShow"
        :key="imagecropperKey"
        :width="300"
        :height="300"
        url="http://123.206.55.50:11000/upload"
        lang-type="en"
        @close="close"
        @crop-upload-success="cropSuccess"
      />
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import {mapState, mapGetters,mapActions } from 'vuex'
=======
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'
import { mapGetters , mapState , mapActions } from 'vuex'
>>>>>>> 6c26d17625d74b8c8c38132ebdc4f603fadef647
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'
import SizeSelect from '@/components/SizeSelect'
import LangSelect from '@/components/LangSelect'
import Search from '@/components/HeaderSearch'
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'
export default {
<<<<<<< HEAD

  data(){
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191'
=======
  data() {
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      image: ''
>>>>>>> 6c26d17625d74b8c8c38132ebdc4f603fadef647
    }
  },
  components: {
    Breadcrumb,
    Hamburger,
    ErrorLog,
    Screenfull,
    SizeSelect,
    LangSelect,
    Search,
    ImageCropper,
<<<<<<< HEAD
    PanThumb
=======
    PanThumb 
>>>>>>> 6c26d17625d74b8c8c38132ebdc4f603fadef647
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name',
      'avatar',
      'device'
    ]),
    ...mapState({
      userInfo:state=>state.user.userInfo
    })
  },
  methods: {
    ...mapActions({
<<<<<<< HEAD
      getInfo:'user/getInfo',
      getUpdataUserInfo:'user/getUpdataUserInfo'
    }),
    async cropSuccess(e) {
        this.image = e[0].path
        this.imagecropperShow = false
        let res = await this.getInfo()
        await this.getUpdataUserInfo({
          user_id:res.user_id,
          user_name:res.user_name,
          user_pwd:res.user_pwd,
          identity_id:res.identity_id,
          avatar:this.image
        })
       await this.getInfo()
    },
    close() {
        this.imagecropperShow = false
    },
=======
      user_user:'user/user_user'
    }),
>>>>>>> 6c26d17625d74b8c8c38132ebdc4f603fadef647
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    cropSuccess(e) {
      this.user_user({
        user_id:this.userInfo.user_id,
        user_name:this.userInfo.user_name,
        avatar:e[0].path
      })
    },
    close() {
      this.imagecropperShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 64px;
  overflow: hidden;
  /* position: relative; */
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  position: fixed;
  top: 0;
  z-index: 99;

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      /* &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      } */
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

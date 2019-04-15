<template>
  <section class="app-main">
    <!-- <transition name="fade-transform" mode="out-in"> -->
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    <!-- </transition> -->
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.fullPath
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  /* min-height: calc(100vh - 50px); */
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-top: 64px;
<<<<<<< HEAD
  padding: 20px 25px 0 25px;
  box-sizing:border-box;
=======
  padding: 20px 25px 40px 25px;
  box-sizing: border-box;
  background: #F0F2F5;
>>>>>>> 8ae80bb90032fbc00d21ddbea0e9f910cfaf7746
}

.fixed-header+.app-main {
  padding-top: 50px;
}

.hasTagsView {
  .fixed-header+.app-main {
    padding-top: 84px;
  }
}
</style>


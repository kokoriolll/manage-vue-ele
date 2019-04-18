<template>
    <div>
        <p class="title">详情页面</p>
        <Detail class="box" />
    </div>
</template>

<script>
    import Detail from '@/components/questions/detail.vue'
    export default {
        components:{
            Detail
        },
        created() {
            this.getRoute();
        },
        methods: {
            getRoute(){
                this.list = this.$route.query.list;
                console.log(this.list.questions_stem)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .title{
        font-size: 22px;
    }
</style>
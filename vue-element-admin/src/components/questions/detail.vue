<template>
    <div class="box">
        <div class="left">
            <p>出题人:<span>丁山山</span></p>
            <div>
                <p>题目信息</p>
                <ul class="title_list">
                    <li>代码补全</li>
                    <li>javascript上</li>
                    <li>周考1</li>
                </ul>
            </div>
            <!-- <tinymce :height="300" v-model="content" id='tinymce'></tinymce> -->
        </div>
        <div class="right">答案信息</div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    *{
        list-style: none;
    }
    .box{
        width: 100%;
        display: flex;
        .left{
            width: 60%;
            background:#fff;
            margin-right:1.5%;
            box-sizing:border-box;
            border-radius: 10px;
            padding: 2%;
        }
        .right{
            width: 40%;
            background:#fff;
            border-radius: 10px;
            padding: 2%;
            box-sizing:border-box;
        }
    }
</style>
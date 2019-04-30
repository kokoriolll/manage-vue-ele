<template>
    <div>
        <div>
            <ul class="list">
                <li>
                    <P>状态:</P>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </li>
                <li>
                    <P>班级:</P>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </li>
                <li>
                    <span><el-button type="text" class="addbtn">提交</el-button></span>
                </li>
            </ul>
        </div>
        <div class="content">
            <p>试卷列表</p>
            <ul class="c_list">
                <li>班级</li>
                <li>姓名</li>
                <li>阅卷状态</li>
                <li>开始时间</li>
                <li>结束时间</li>
                <li>成材率</li>
                <li>操作</li>
            </ul>
            <div>
                <!-- <ol class="c_lists" v-for='(item,index) in list_view'>
                    <li>{{item.student_id}}</li>
                    <li>姓名</li>
                    <li>阅卷状态</li>
                    <li>开始时间</li>
                    <li>结束时间</li>
                    <li>成材率</li>
                    <li>删除</li>
                </ol> -->
                <p class="available">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxKSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxlbGxpcHNlIGZpbGw9IiNGNUY1RjUiIGN4PSIzMiIgY3k9IjMzIiByeD0iMzIiIHJ5PSI3Ii8+CiAgICA8ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iI0Q5RDlEOSI+CiAgICAgIDxwYXRoIGQ9Ik01NSAxMi43Nkw0NC44NTQgMS4yNThDNDQuMzY3LjQ3NCA0My42NTYgMCA0Mi45MDcgMEgyMS4wOTNjLS43NDkgMC0xLjQ2LjQ3NC0xLjk0NyAxLjI1N0w5IDEyLjc2MVYyMmg0NnYtOS4yNHoiLz4KICAgICAgPHBhdGggZD0iTTQxLjYxMyAxNS45MzFjMC0xLjYwNS45OTQtMi45MyAyLjIyNy0yLjkzMUg1NXYxOC4xMzdDNTUgMzMuMjYgNTMuNjggMzUgNTIuMDUgMzVoLTQwLjFDMTAuMzIgMzUgOSAzMy4yNTkgOSAzMS4xMzdWMTNoMTEuMTZjMS4yMzMgMCAyLjIyNyAxLjMyMyAyLjIyNyAyLjkyOHYuMDIyYzAgMS42MDUgMS4wMDUgMi45MDEgMi4yMzcgMi45MDFoMTQuNzUyYzEuMjMyIDAgMi4yMzctMS4zMDggMi4yMzctMi45MTN2LS4wMDd6IiBmaWxsPSIjRkFGQUZBIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K" alt="">
                    <span>暂无数据</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: ''
            }
            
        },
        async created() {
            await this.students();
            console.log(this.list_view)
        },
        computed: {
            ...mapState({
                list_view:state=>state.approval.list_view
            })
        },
        methods: {
            ...mapActions({
                students:'approval/students'
            })
        }
    };
</script>

<style lang="scss" scoped>
    *{
        list-style: none;
    }
    ul{
        padding: 0;
        margin: 0;
    }
    .list{
        display: flex;
        background: #fff;
        padding: 20px;
        border-radius: 20px;
        justify-content: space-around;
        li{
            display: flex ;
            align-items: center;
            p{
                margin-right: 10px;
            }
        }
    }
    .addbtn {
        padding: 9px 40px 10px 40px;
        background: linear-gradient(-90deg, #4e75ff, #0139fd) !important;
        font-size: 14px;
        color: #fff;
    }
    .content{
        background: #fff;
        border-radius: 20px;
        overflow: hidden;
        padding: 20px;
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    }
    .c_list{
        display: flex;
        justify-content: space-around;
        background: #F4F7F9;
        color: #242525;
        font-size: 14px;
        width: 100%;
        padding: 20px 0;
    }
    .c_lists{
        display: flex;
        justify-content: space-around;
        color: #242525;
        font-size: 14px;
        width: 100%;
        padding: 15px 0;
        border-bottom: 1px solid #ccc;
    }
    .available{
        width: 100%;
        height: 200px;
        border-bottom: 1px solid #ccc;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .available img{
        width: 8%;
        margin-bottom: 5px;
    }
    .available span{
        font-size: 14px;
        color: #8C8C8C;
    }
</style>
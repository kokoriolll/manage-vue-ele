<template>
    <div>
        <p>题目信息</p>
        <div class="stem">
            <span class="stem_g">题干</span>
            <input type="text" placeholder="请输入题目标题，不超过20个字" maxlength="20">
        </div>
        <div class="theme">
            <span>题目主题</span>
            <div class="editor-container">
                <markdown-editor v-model="content1" height="300px" />
            </div>
        </div>
        <div class="exam_style">
            <span>请选择考试类型:</span>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="exam_style">
            <span>请选择课程类型:</span>
            <el-select v-model="value" placeholder="请选择">
                <el-option 
                    v-for="item in options" 
                    :key="item.value" 
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="exam_style">
            <span>请选择题目类型:</span>
            <el-select v-model="value" placeholder="请选择">
                <el-option 
                    v-for="item in options" 
                    :key="item.value" 
                    :label="item.label" 
                    :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="theme">
            <span>答案信息</span>
            <div class="editor-container">
                <markdown-editor v-model="content1" height="300px" />
            </div>
        </div>
        <el-button type="text" @click="open3" class="addbtn">提交</el-button>
    </div>
</template>

<script>
    import MarkdownEditor from '@/components/MarkdownEditor'
    const content = ``
    export default {
        name: 'MarkdownDemo',
        components: { MarkdownEditor },
        data() {
            return {
                content1: content,
                content2: content,
                content3: content,
                content4: content,
                html: '',
                languageTypeList: {
                    'en': 'en_US',
                    'zh': 'zh_CN',
                    'es': 'es_ES'
                },
                value: '',
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
                }]
            }
        },
        computed: {
            language() {
                return this.languageTypeList[this.$store.getters.language]
            }
        },
        methods: {
            getHtml() {
                this.html = this.$refs.markdownEditor.getHtml()
                console.log(this.html)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .stem {
        width: 500px;
        height: 80px;
        display: flex;
        flex-direction: column;

        .stem_g {
            margin-bottom: 10px;
        }

        input {
            width: 100%;
            height: 40px;
            padding-left: 20px;
            box-sizing: border-box;

        }
        input::-webkit-input-placeholder{
             color: #CDBFBF;   
        }
    }
    .addbtn {
        padding: 12px 40px 12px 40px;
        background: linear-gradient(-90deg, #4e75ff, #0139fd) !important;
        font-size: 14px;
        color: #fff;
    }
    .editor-container {
        margin-bottom: 30px;
    }

    .tag-title {
        margin-bottom: 5px;
    }
    .exam_style{
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }
    .exam_style .el-select{
        margin-top: 10px;
        display: block;
        width:200px;
        height:30px;
    }
</style>
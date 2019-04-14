<template>
    <div class="classMan">
        <p>学生管理</p>
        <div class="classContent">
            <div class="form">
                <el-form ref="form" :model="form" label-width="80px">
                <el-input style="width:175px" v-model="form.name" placeholder="输入学生姓名"></el-input>
                 <el-select placeholder="班级名" style="margin-left:10px" v-model="form.region">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                <el-select placeholder="班级名" style="margin-left:10px" v-model="form.region">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                <div class="btns">
                    <el-button type="primary">搜索</el-button>
                    <el-button type="primary">重置</el-button>
                </div>
              </el-form>
            </div>
            <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="name"
                label="姓名">
            </el-table-column>
            <el-table-column
                prop="num"
                label="学号">
            </el-table-column>
            <el-table-column
                prop="class"
                label="班级">
            </el-table-column>
            <el-table-column
                prop="address"
                label="教室">
            </el-table-column>
            <el-table-column
                prop="address"
                label="密码">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="100" style="colo:#000">
            <template slot-scope="scope">
                <el-button type="text" size="small" style="color:#606266">删除</el-button>
            </template>
            </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
   export default {
     data() {
        return {
            options: [{
          value: 'jiaoshihao',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }],
            form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
            },
          tableData: [{
            name:'马好好',
            num:'1732153120',
            class:'1609B',
            address: '13011'
          }, {
            name:'马好好',
            num:'1732153120',
            class:'1609B',
            address: '13011'
          }, {
            name:'马好好',
            num:'1732153120',
            class:'1609B',
            address: '13011'
          }, {
            name:'马好好',
            num:'1732153120',
            class:'1609B',
            address: '13011'
          },{
            name:'马好好',
            num:'1732153120',
            class:'1609B',
            address: '13011'
          },{
            name:'马好好',
            num:'1732153120',
            class:'1609B',
            address: '13011'
          },{
            name:'马好好',
            num:'1732153120',
            class:'1609B',
            address: '13011'
          }
          ]
        }
   }
   }
</script>

<style lang="scss" scoped>
   .btns{
       margin: 10px 0;
      .el-button{
        width: 112px;
        height: 32px;
        background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
    }
   }
   
   .classContent{
       width:100%;
       height:auto;
       background:#FFF;
       border-radius: 10px;
       padding:20px;
       box-sizing:border-box;
       
   }
   .el-table header{
       color: #000;
       font-weight: 400;
       background: #F0F2F5!important;
       margin-top: 20px;
   }
</style>